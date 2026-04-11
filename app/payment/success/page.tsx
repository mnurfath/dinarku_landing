"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function PaymentSuccessPage() {
  const appIntentUrl = "intent://premium-success#Intent;scheme=dinarku;package=com.mnurfath.dinarku;end";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mnurfath.dinarku";

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = appIntentUrl;
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

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
          <div className="auth-icon-success">✅</div>
          <h1 className="auth-title">Pembayaran Berhasil!</h1>
          <p className="auth-subtitle">
            Selamat! Akun Anda telah ditingkatkan ke DinarKu Premium. Aplikasi akan terbuka secara otomatis.
          </p>
          
          <a href={appIntentUrl} className="auth-btn" style={{ textAlign: "center" }}>
            Buka Aplikasi DinarKu
          </a>
          
          <a
            href={playStoreUrl}
            className="auth-back"
            style={{ marginTop: "16px" }}
          >
            Belum punya aplikasi? Download di Play Store →
          </a>

          <a href="/" className="auth-back" style={{ marginTop: "24px" }}>
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
