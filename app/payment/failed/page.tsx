"use client";

import Image from "next/image";

export default function PaymentFailedPage() {
  const appIntentUrl = "intent://premium-failed#Intent;scheme=dinarku;package=com.mnurfath.dinarku;end";

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
          <div className="auth-icon">❌</div>
          <h1 className="auth-title">Pembayaran Gagal</h1>
          <p className="auth-subtitle">
            Maaf, pembayaran tidak berhasil. Silakan coba lagi.
          </p>
          
          <a href="/payment" className="auth-btn" style={{ textAlign: "center" }}>
            Coba Lagi
          </a>
          
          <a
            href={appIntentUrl}
            className="auth-back"
            style={{ marginTop: "16px" }}
          >
            Buka Aplikasi DinarKu
          </a>

          <a href="/" className="auth-back" style={{ marginTop: "24px" }}>
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
