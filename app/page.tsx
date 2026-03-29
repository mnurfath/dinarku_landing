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
  {
    icon: "🧮",
    color: "gold",
    title: "Kalkulator Investasi",
    desc: "Simulasikan pertumbuhan aset dengan Kalkulator Compounding dan Kalkulator Kebebasan Finansial lengkap dengan perhitungan inflasi.",
  },
];

const faqs = [
  {
    q: "Apa itu Dinar Khoiru Roziqin (Dinar KR)?",
    a: "Dinar Khoiru Roziqin (DKR) adalah emas murni 24 karat (999,9 fine gold) berbentuk koin (dinar) yang diproduksi dan dipasarkan oleh PT Dinar Khoiru Roziqin, perusahaan resmi yang berpusat di Margonda, Depok.",
  },
  {
    q: "Apakah Dinar KR resmi dan legal?",
    a: "Ya. Dinar KR bukan alat tukar, melainkan komoditas emas batangan berbentuk koin yang diakui oleh Undang-Undang RI sebagai barang berharga yang boleh diperjualbelikan.",
  },
  {
    q: "Berapa berat 1 Dinar KR?",
    a: "1 Dinar KR = 4,25 gram emas murni 24K (999,9 fine gold). Standar ini mengikuti ukuran Dinar Islam klasik sejak masa Rasulullah ﷺ dan Khalifah Umar bin Khattab.",
  },
  {
    q: "Apa hubungan Dinar KR dengan zakat?",
    a: "Nisab zakat = 20 dinar = 85 gram emas. Zakatnya = ½ dinar (2,5%) per tahun. Menabung 20 dinar berarti sudah mencapai tingkat muzaki (orang wajib zakat).",
  },
  {
    q: "Bagaimana cara membeli Dinar KR?",
    a: "Melalui Sentra Layanan Dinar (SLD) terdekat atau Wakil Resmi (WR). Bisa juga via website resmi: www.dinarkr.com",
  },
  {
    q: "Apakah Dinar KR MLM?",
    a: "Bukan MLM. Tidak ada sistem member-get-member. Keuntungan berasal dari rabat penjualan, bukan perekrutan orang. Fokus utamanya adalah edukasi dan syiar ekonomi umat berbasis emas halal.",
  },
  {
    q: "Apakah bisa membeli pecahan kecil?",
    a: "Ya. Dinar KR memiliki berbagai pecahan mulai dari 1/8 Dinar (±0,53 gr) hingga 20 Dinar (85 gr) agar bisa disesuaikan dengan kemampuan setiap orang.",
  },
  {
    q: "Bagaimana jika komunitas Dinar KR bubar?",
    a: "Tidak masalah. Karena emas tetap emas — nilainya tidak bergantung pada komunitas. Dinar KR bisa dijual ke toko emas manapun, pegadaian, atau bahkan ke luar negeri.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            🚀 Coming Soon
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
                🚀 Coming Soon
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

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">❓ FAQ</span>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-subtitle">
              Temukan jawaban seputar Dinar KR, investasi emas, dan fitur
              DinarKu.
            </p>
          </div>

          <div className="faq-list animate-on-scroll">
            {(showAllFaqs ? faqs : faqs.slice(0, 4)).map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          {!showAllFaqs && (
            <div className="faq-show-all animate-on-scroll">
              <button
                className="btn-secondary"
                onClick={() => setShowAllFaqs(true)}
              >
                Lihat Semua FAQ
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="download">
        <div className="cta-card animate-on-scroll">
          <h2 className="cta-title">Segera Hadir</h2>
          <p className="cta-desc">
            DinarKu sedang dalam tahap pengembangan. Nantikan peluncurannya dan
            kelola investasi Dinar emas Anda dengan mudah. Gratis, aman, dan
            privacy-first.
          </p>
          <div className="cta-buttons">
            <span className="btn-primary" style={{ cursor: "default" }}>
              🚀 Coming Soon
            </span>
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
            <a href="/faq" className="footer-link">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
