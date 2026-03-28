"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [sessionReady, setSessionReady] = useState(false);
  const [sessionError, setSessionError] = useState(false);

  useEffect(() => {
    // Supabase automatically picks up the tokens from the URL hash
    // when using createClient on the browser
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "PASSWORD_RECOVERY") {
          setSessionReady(true);
        }
      }
    );

    // Also check if we already have a session (user clicked link and session was established)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSessionReady(true);
      }
    });

    // If no session after 3 seconds, show error
    const timeout = setTimeout(() => {
      setSessionReady((ready) => {
        if (!ready) setSessionError(true);
        return ready;
      });
    }, 3000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak cocok.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-container">
        <a href="/" className="auth-brand">
          <Image
            src="/app-icon.png"
            alt="DinarKu"
            width={48}
            height={48}
            className="auth-logo"
          />
          <span className="auth-brand-name">DinarKu</span>
        </a>

        <div className="auth-card">
          {success ? (
            <>
              <div className="auth-icon-success">✅</div>
              <h1 className="auth-title">Password Berhasil Direset</h1>
              <p className="auth-subtitle">
                Password Anda telah diperbarui. Silakan buka aplikasi DinarKu
                dan login dengan password baru Anda.
              </p>
              <a href="/" className="auth-btn" style={{ textAlign: "center" }}>
                Kembali ke Beranda
              </a>
            </>
          ) : sessionError && !sessionReady ? (
            <>
              <div className="auth-icon-success">⚠️</div>
              <h1 className="auth-title">Link Tidak Valid</h1>
              <p className="auth-subtitle">
                Link reset password tidak valid atau sudah kadaluarsa. Silakan
                minta link reset password baru.
              </p>
              <a
                href="/forgot-password"
                className="auth-btn"
                style={{ textAlign: "center" }}
              >
                Minta Link Baru
              </a>
            </>
          ) : !sessionReady ? (
            <>
              <div className="auth-icon">⏳</div>
              <h1 className="auth-title">Memverifikasi...</h1>
              <p className="auth-subtitle">
                Mohon tunggu, sedang memverifikasi link reset password Anda.
              </p>
            </>
          ) : (
            <>
              <div className="auth-icon">🔒</div>
              <h1 className="auth-title">Reset Password</h1>
              <p className="auth-subtitle">
                Masukkan password baru untuk akun DinarKu Anda.
              </p>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <label htmlFor="password" className="auth-label">
                    Password Baru
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimal 6 karakter"
                    required
                    minLength={6}
                    className="auth-input"
                  />
                </div>

                <div className="auth-field">
                  <label htmlFor="confirmPassword" className="auth-label">
                    Konfirmasi Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ketik ulang password"
                    required
                    minLength={6}
                    className="auth-input"
                  />
                </div>

                {error && <p className="auth-error">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="auth-btn"
                >
                  {loading ? "Menyimpan..." : "Simpan Password Baru"}
                </button>
              </form>
            </>
          )}

          <a href="/" className="auth-back">
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
