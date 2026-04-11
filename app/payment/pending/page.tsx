"use client";

import Image from "next/image";

export default function PaymentPendingPage() {
  const appIntentUrl = "intent://premium-pending#Intent;scheme=dinarku;package=com.mnurfath.dinarku;end";

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
          <div className="auth-icon">⏳</div>
          <h1 className="auth-title">Menunggu Pembayaran</h1>
          <p className="auth-subtitle">
            Pembayaran Anda sedang diproses. Silakan selesaikan pembayaran sesuai metode yang dipilih. Status akan diperbarui otomatis setelah pembayaran dikonfirmasi.
          </p>
          
          <a href={appIntentUrl} className="auth-btn" style={{ textAlign: "center" }}>
            Buka Aplikasi DinarKu
          </a>
          
          <a href="/" className="auth-back" style={{ marginTop: "24px" }}>
            ← Kembali ke Halaman Utama
          </a>
        </div>
      </div>
    </div>
  );
}
