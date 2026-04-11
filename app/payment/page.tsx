"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

declare global {
  interface Window {
    snap: {
      pay: (
        token: string,
        options: {
          onSuccess?: (result: unknown) => void;
          onPending?: (result: unknown) => void;
          onError?: (result: unknown) => void;
          onClose?: () => void;
        }
      ) => void;
    };
  }
}

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    if (!token) return;
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan saat memproses pembayaran");
      }

      if (data.token && window.snap) {
        window.snap.pay(data.token, {
          onSuccess: () => {
            router.push("/payment/success");
          },
          onPending: () => {
            router.push("/payment/pending");
          },
          onError: () => {
            router.push("/payment/failed");
          },
          onClose: () => {
            setLoading(false);
          },
        });
      } else {
        throw new Error("Sistem pembayaran tidak tersedia");
      }
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan yang tidak diketahui");
      }
    }
  };

  if (!token) {
    return (
      <div className="auth-card">
        <div className="auth-icon-success">⚠️</div>
        <h1 className="auth-title">Link Tidak Valid</h1>
        <p className="auth-subtitle">
          Link pembayaran tidak valid atau sudah kadaluarsa. Silakan buka kembali dari aplikasi DinarKu.
        </p>
        <a href="/" className="auth-back">
          ← Kembali ke Beranda
        </a>
      </div>
    );
  }

  return (
    <div className="auth-card">
      <div className="payment-plan-card">
        <div className="auth-icon" style={{ marginBottom: "8px" }}>🏆</div>
        <h1 className="auth-title">DinarKu Premium</h1>
        <div className="payment-price">Rp 49.000</div>
        <div className="payment-price-label">Sekali Bayar</div>
        
        <ul className="payment-benefits">
          <li className="payment-benefit-item">Portofolio tanpa batas</li>
          <li className="payment-benefit-item">Analisis pertumbuhan lanjutan</li>
          <li className="payment-benefit-item">Kalkulator investasi lengkap</li>
          <li className="payment-benefit-item">Notifikasi real-time</li>
          <li className="payment-benefit-item">Dompet Impian unlimited</li>
        </ul>

        {error && <p className="auth-error" style={{ marginBottom: "16px" }}>{error}</p>}

        <button 
          onClick={handlePayment} 
          disabled={loading} 
          className="auth-btn"
        >
          {loading ? "Memproses..." : "Bayar Sekarang"}
        </button>
        
        <div className="payment-secure-badge">
          🔒 Pembayaran Aman
        </div>
      </div>

      <a href="/" className="auth-back">
        ← Kembali ke Beranda
      </a>
    </div>
  );
}

export default function PaymentPage() {
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

        <Suspense fallback={
          <div className="auth-card">
            <div className="auth-icon">⏳</div>
            <h1 className="auth-title">Memuat...</h1>
            <p className="auth-subtitle">Menyiapkan halaman pembayaran.</p>
          </div>
        }>
          <PaymentContent />
        </Suspense>
      </div>
    </div>
  );
}
