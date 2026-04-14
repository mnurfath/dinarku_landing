"use client";

import { useState } from "react";
import Image from "next/image";
import { supabaseBrowser } from "../lib/supabase-browser";

export default function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabaseBrowser.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
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
          {sent ? (
            <>
              <div className="auth-icon-success">✉️</div>
              <h1 className="auth-title">Email Terkirim</h1>
              <p className="auth-subtitle">
                Kami telah mengirim ulang email konfirmasi ke{" "}
                <strong>{email}</strong>. Silakan cek inbox atau folder spam
                Anda.
              </p>
              <button
                className="auth-btn"
                onClick={() => {
                  setSent(false);
                  setEmail("");
                }}
              >
                Kirim Ulang
              </button>
            </>
          ) : (
            <>
              <div className="auth-icon">📧</div>
              <h1 className="auth-title">Verifikasi Email</h1>
              <p className="auth-subtitle">
                Masukkan email yang terdaftar di akun DinarKu Anda. Kami akan
                mengirimkan ulang link konfirmasi.
              </p>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <label htmlFor="email" className="auth-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    required
                    className="auth-input"
                  />
                </div>

                {error && <p className="auth-error">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="auth-btn"
                >
                  {loading ? "Mengirim..." : "Kirim Email Konfirmasi"}
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
