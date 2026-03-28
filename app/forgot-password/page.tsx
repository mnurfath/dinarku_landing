"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
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
              <h1 className="auth-title">Cek Email Anda</h1>
              <p className="auth-subtitle">
                Kami telah mengirim link reset password ke{" "}
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
              <div className="auth-icon">🔑</div>
              <h1 className="auth-title">Lupa Password?</h1>
              <p className="auth-subtitle">
                Masukkan email yang terdaftar di akun DinarKu Anda. Kami akan
                mengirimkan link untuk reset password.
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
                  {loading ? "Mengirim..." : "Kirim Link Reset"}
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
