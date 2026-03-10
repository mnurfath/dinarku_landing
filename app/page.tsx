"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/Screenshot_1773144889.png",
    title: "Dashboard",
    desc: "Pantau total aset, keuntungan, dan kepemilikan Dinar Anda",
  },
  {
    src: "/screenshots/Screenshot_1773144894.png",
    title: "Pertumbuhan Nilai",
    desc: "Analisis pertumbuhan portofolio dengan grafik interaktif",
  },
  {
    src: "/screenshots/Screenshot_1773144899.png",
    title: "Kalkulator Zakat",
    desc: "Hitung zakat otomatis berdasarkan nisab dan haul",
  },
  {
    src: "/screenshots/Screenshot_1773144932.png",
    title: "Dompet Impian",
    desc: "Tetapkan target tabungan dan pantau progresnya",
  },
  {
    src: "/screenshots/Screenshot_1773146158.png",
    title: "Dompet Impian",
    desc: "Kelola semua target mimpi dalam satu tempat",
  },
  {
    src: "/screenshots/Screenshot_1773146229.png",
    title: "Marketplace",
    desc: "Jual beli Dinar emas 24 karat langsung dari aplikasi",
  },
];

const features = [
  {
    icon: "🏛️",
    color: "gold",
    title: "Portofolio Dinar",
    desc: "Pantau total aset, keuntungan real-time, dan detail kepemilikan setiap denominasi Dinar Anda.",
  },
  {
    icon: "📈",
    color: "green",
    title: "Pertumbuhan Nilai",
    desc: "Lihat analisis pertumbuhan portofolio dengan grafik interaktif 7H, 30H, 90H, hingga semua waktu.",
  },
  {
    icon: "🕌",
    color: "gold",
    title: "Kalkulator Zakat",
    desc: "Hitung zakat maal otomatis berdasarkan nisab 20 Dinar, progres haul, dan tarif 2.5%.",
  },
  {
    icon: "🎯",
    color: "green",
    title: "Dompet Impian",
    desc: "Buat target tabungan seperti Dana Haji atau Tabungan Rumah, alokasikan Dinar, dan pantau progresnya.",
  },
  {
    icon: "🛒",
    color: "gold",
    title: "Marketplace",
    desc: "Jual beli Dinar emas 24 karat dari berbagai denominasi langsung melalui aplikasi.",
  },
  {
    icon: "🔔",
    color: "green",
    title: "Notifikasi",
    desc: "Dapatkan pemberitahuan perubahan harga, pengingat zakat, dan update target tabungan.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Auto-rotate hero phone screenshots
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const nextGallerySlide = useCallback(() => {
    setGallerySlide((prev) => (prev + 1) % screenshots.length);
  }, []);

  const prevGallerySlide = useCallback(() => {
    setGallerySlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  }, []);

  // Auto-rotate gallery
  useEffect(() => {
    const timer = setInterval(nextGallerySlide, 4000);
    return () => clearInterval(timer);
  }, [nextGallerySlide]);

  const getGalleryPosition = (index: number) => {
    const diff =
      ((index - gallerySlide + screenshots.length) % screenshots.length) -
      Math.floor(screenshots.length / 2);

    if (Math.abs(diff) > 2)
      return { opacity: 0, transform: "scale(0.6)", zIndex: 0 };

    const scale = diff === 0 ? 1 : 0.8 - Math.abs(diff) * 0.05;
    const translateX = diff * 270;
    const zIndex = 10 - Math.abs(diff);
    const opacity = diff === 0 ? 1 : 0.5 - Math.abs(diff) * 0.15;

    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      left: "50%",
      marginLeft: "-120px",
    };
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <a href="#" className="navbar-brand">
            <Image
              src="/app-icon.png"
              alt="DinarKu"
              width={40}
              height={40}
              className="navbar-logo"
            />
            <span className="navbar-title">DinarKu</span>
          </a>
          <button
            className="navbar-cta"
            onClick={() =>
              document
                .getElementById("download")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            📥 Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Dinar Gold Investment Tracker
            </div>
            <h1 className="hero-title">
              <span className="hero-title-gradient">DinarKu</span>
            </h1>
            <p className="hero-subtitle">
              Emaskan Impianmu — Pantau investasi Dinar emas, hitung zakat
              otomatis, dan wujudkan impianmu dengan tabungan Dinar.
            </p>
            <div className="hero-actions">
              <a href="#download" className="btn-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Sekarang
              </a>
              <a href="#features" className="btn-secondary">
                Pelajari Fitur
              </a>
            </div>
          </div>

          <div className="hero-phone">
            <div className="phone-glow" />
            <div className="phone-container">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  {screenshots.map((shot, i) => (
                    <Image
                      key={shot.src}
                      src={shot.src}
                      alt={shot.title}
                      width={560}
                      height={1200}
                      className={i === currentSlide ? "active" : ""}
                      priority={i === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">✨ Fitur Unggulan</span>
            <h2 className="section-title">
              Semua yang Anda Butuhkan untuk Investasi Dinar
            </h2>
            <p className="section-subtitle">
              Kelola portofolio Dinar emas, hitung zakat, pantau pertumbuhan,
              dan capai target tabungan impian Anda.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="feature-card animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`feature-icon ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="gallery" id="gallery">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">📱 Tampilan Aplikasi</span>
            <h2 className="section-title">Intip DinarKu Lebih Dekat</h2>
            <p className="section-subtitle">
              Jelajahi setiap fitur melalui tampilan langsung dari aplikasi.
            </p>
          </div>

          <div className="gallery-carousel animate-on-scroll">
            <button
              className="gallery-nav prev"
              onClick={prevGallerySlide}
              aria-label="Previous"
            >
              ‹
            </button>
            <div className="gallery-track">
              {screenshots.map((shot, i) => (
                <div
                  key={`gallery-${shot.src}`}
                  className={`gallery-item ${
                    i === gallerySlide ? "active" : ""
                  }`}
                  style={getGalleryPosition(i)}
                >
                  <div className="gallery-item-inner">
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      width={480}
                      height={1040}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="gallery-nav next"
              onClick={nextGallerySlide}
              aria-label="Next"
            >
              ›
            </button>

            <div className="gallery-info">
              <h3 className="gallery-info-title">
                {screenshots[gallerySlide].title}
              </h3>
              <p className="gallery-info-desc">
                {screenshots[gallerySlide].desc}
              </p>
            </div>

            <div className="gallery-controls">
              {screenshots.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  className={`gallery-dot ${
                    i === gallerySlide ? "active" : ""
                  }`}
                  onClick={() => setGallerySlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="download">
        <div className="cta-card animate-on-scroll">
          <h2 className="cta-title">Mulai Perjalanan Investasi Dinar Anda</h2>
          <p className="cta-desc">
            Download DinarKu sekarang dan kelola investasi Dinar emas Anda
            dengan mudah. Gratis, aman, dan privacy-first.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.523 2.226a.908.908 0 00-.204.084L3.32 9.707a.883.883 0 00-.082 1.51l3.39 2.396.002.002 2.151 1.52 3.757-4.092a.597.597 0 01.879.805l-3.36 3.66 1.218.86.003.002 2.64 1.865a.883.883 0 001.296-.394l5.82-13.97a.883.883 0 00-.964-1.224 .952.952 0 00-.148.058l-.002.001-.003.002-.084.04h-.001z" />
              </svg>
              Google Play
            </a>
            <a href="#" className="btn-secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Image
              src="/app-icon.png"
              alt="DinarKu"
              width={32}
              height={32}
              className="footer-logo"
            />
            <span className="footer-name">DinarKu</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} DinarKu. Emaskan Impianmu.
          </p>
          <div className="footer-links">
            <a href="/privacy-policy" className="footer-link">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
