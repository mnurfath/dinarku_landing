"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabase";

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const trimmed = email.trim().toLowerCase();

    if (!GMAIL_REGEX.test(trimmed)) {
      setLoading(false);
      setError("Masukkan alamat Gmail yang valid (contoh: namaanda@gmail.com)");
      return;
    }

    const { error: insertError } = await supabase
      .from("early_access_signups")
      .insert({ email: trimmed });

    setLoading(false);

    if (insertError) {
      if (insertError.code === "23505") {
        setSubmitted(true);
        return;
      }
      setError(insertError.message);
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setError("");
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
          {submitted ? (
            <>
              <div className="auth-icon-success">✅</div>
              <h1 className="auth-title">Kamu sudah terdaftar!</h1>
              <p className="auth-subtitle">
                Kami akan menghubungi{" "}
                <strong>{email.trim().toLowerCase()}</strong> saat DinarKu siap
                di akses melalui Google Play Store.
              </p>
              <button className="auth-btn" onClick={handleReset}>
                Daftar Email Lain
              </button>
            </>
          ) : (
            <>
              <div className="auth-icon">🚀</div>
              <h1 className="auth-title">Join Early Access</h1>
              <p className="auth-subtitle">
                Daftarkan email Google Anda untuk mendapatkan akses awal
                DinarKu di Play Store. Gratis, tanpa spam.
              </p>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <label htmlFor="email" className="auth-label">
                    Alamat Gmail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
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
                  {loading ? "Mengirim..." : "Join Early Access"}
                </button>
              </form>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginTop: "12px",
                  textAlign: "center",
                }}
              >
                Gunakan alamat Gmail yang terhubung dengan akun Google Play
                Store Anda.
              </p>
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
