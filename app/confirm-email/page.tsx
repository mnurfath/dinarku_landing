"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const APP_INTENT_URL =
  "intent://email-confirmed#Intent;scheme=dinarku;package=com.mnurfath.dinarku;end";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mnurfath.dinarku";

function ConfirmEmailContent() {
  const searchParams = useSearchParams();
  const [opening, setOpening] = useState(false);

  const confirmed = searchParams.get("confirmed") === "true";
  const errorParam = searchParams.get("error");

  useEffect(() => {
    if (confirmed) {
      setOpening(true);
      window.location.href = APP_INTENT_URL;
      const timer = setTimeout(() => setOpening(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [confirmed]);

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
          {confirmed ? (
            <>
              <div className="auth-icon-success">✅</div>
              <h1 className="auth-title">Email Terkonfirmasi!</h1>
              <p className="auth-subtitle">
                Akun DinarKu Anda telah aktif. Aplikasi akan terbuka secara
                otomatis. Jika tidak, tekan tombol di bawah.
              </p>
              <a
                href={APP_INTENT_URL}
                className="auth-btn"
                style={{ textAlign: "center" }}
              >
                {opening ? "Membuka Aplikasi..." : "Buka Aplikasi DinarKu"}
              </a>
              <a
                href={PLAY_STORE_URL}
                className="auth-back"
                style={{ marginTop: "12px" }}
              >
                Belum punya aplikasi? Download di Play Store →
              </a>
            </>
          ) : errorParam ? (
            <>
              <div className="auth-icon-success">⚠️</div>
              <h1 className="auth-title">Konfirmasi Gagal</h1>
              <p className="auth-subtitle">
                {errorParam === "Missing confirmation token"
                  ? "Link konfirmasi tidak valid. Silakan minta link baru."
                  : decodeURIComponent(errorParam)}
              </p>
              <a
                href="/verify-email"
                className="auth-btn"
                style={{ textAlign: "center" }}
              >
                Kirim Ulang Email Konfirmasi
              </a>
            </>
          ) : (
            <>
              <div className="auth-icon-success">📧</div>
              <h1 className="auth-title">Cek Email Anda</h1>
              <p className="auth-subtitle">
                Kami telah mengirim email konfirmasi. Silakan klik link di dalam
                email untuk mengaktifkan akun DinarKu Anda.
              </p>
              <a
                href="/verify-email"
                className="auth-btn"
                style={{ textAlign: "center" }}
              >
                Kirim Ulang Email Konfirmasi
              </a>
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

export default function ConfirmEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="auth-page">
          <div className="auth-bg" />
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-icon">⏳</div>
              <h1 className="auth-title">Memuat...</h1>
            </div>
          </div>
        </div>
      }
    >
      <ConfirmEmailContent />
    </Suspense>
  );
}
