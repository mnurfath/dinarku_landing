"use client";

import Image from "next/image";
import { useState } from "react";

const faqCategories = [
  {
    id: "pengenalan",
    icon: "🟢",
    title: "A. Pengenalan Umum",
    items: [
      {
        q: "Apa itu Dinar Khoiru Roziqin (Dinar KR)?",
        a: 'Dinar Khoiru Roziqin (DKR) adalah emas murni 24 karat (999,9 fine gold) berbentuk koin (dinar) yang diproduksi dan dipasarkan oleh PT Dinar Khoiru Roziqin, perusahaan resmi yang berpusat di Margonda, Depok.\n\nKata Khoiru Roziqin berasal dari doa Al-Qur\'an:\n"Warzuqnā wa anta khairur-rāziqīn" (QS. Al-Māidah: 114)\n"Dan berilah kami rezeki, Engkaulah sebaik-baik pemberi rezeki."\n\nDoa ini tertulis di setiap koin Dinar KR sebagai pengingat tauhid, bahwa rezeki sejati datang dari Allah SWT.',
      },
      {
        q: "Siapa yang mendirikan Dinar KR?",
        a: "DKR diprakarsai oleh Ustadz Nasrulloh, pendiri komunitas Magnet Rezeki, dan dikelola oleh PT Dinar Khoiru Roziqin. Salah satu direktur keuangannya adalah Ibu Etie Nurhayati, alumni STT Telkom angkatan 1991.",
      },
      {
        q: "Apakah Dinar KR resmi dan legal?",
        a: "Ya. Dinar KR bukan alat tukar, melainkan komoditas emas batangan berbentuk koin yang diakui oleh Undang-Undang RI sebagai barang berharga yang boleh diperjualbelikan. Karena itu, penggunaannya tidak melanggar UU Mata Uang selama tidak digunakan sebagai alat transaksi sehari-hari.",
      },
      {
        q: "Di mana Dinar KR diproduksi?",
        a: "Bahan bakunya berasal dari emas murni Indonesia (Antam) dan sebagian impor dengan kadar 999,9 fine gold. Proses pencetakan dilakukan di Indonesia, dengan pengawasan kualitas menggunakan alat XRF Analyzer untuk memastikan kadar emas tetap 24 karat murni.",
      },
    ],
  },
  {
    id: "nilai",
    icon: "🟢",
    title: "B. Nilai dan Keistimewaan Dinar KR",
    items: [
      {
        q: "Berapa berat 1 Dinar KR?",
        a: "1 Dinar KR = 4,25 gram emas murni 24K (999,9 fine gold). Standar ini mengikuti ukuran Dinar Islam klasik sejak masa Rasulullah ﷺ dan Khalifah Umar bin Khattab.",
      },
      {
        q: 'Mengapa Dinar KR disebut "emas syiar Islam"?',
        a: "Karena pada setiap koinnya terdapat:\n• Kalimat tauhid (لَا إِلٰهَ إِلَّا اللّٰهُ)\n• Doa Qur'ani \"Warzuqnā wa anta khairur-rāziqīn\"\n• Desain khas Islami yang mengingatkan agar manusia tidak menjadi hamba dinar, melainkan hamba Allah.",
      },
      {
        q: "Apa kelebihan Dinar KR dibanding emas batangan (Antam, UBS, dll)?",
        a: "Dinar KR memiliki beberapa keunggulan:\n• Kadar emas sama 24K (999,9)\n• Buyback spread lebih kecil (5–7%) dibanding emas batangan (10–15%)\n• Didukung komunitas & edukasi (Magnet Rezeki & Sentra Layanan Dinar)\n• Desain syiar Islam di setiap koin\n• Harga stabil & transparan berdasarkan harga emas dunia\n• Nilai tambah sosial melalui edukasi zakat & ekonomi umat",
      },
      {
        q: "Mengapa harga Dinar KR kadang sedikit lebih tinggi dari Antam?",
        a: "Karena Dinar KR memiliki:\n• Biaya desain syiar dan pencetakan koin\n• Sistem harga stabil (tidak fluktuatif harian)\n• Komitmen menjaga buyback rate terbaik (spread kecil)\n\nNamun, harga jual kembali (buyback) Dinar KR umumnya lebih tinggi dibandingkan emas lain karena stabil dan tidak ada mark-up pasar.",
      },
      {
        q: "Apakah Dinar KR bisa dijual di toko emas atau pegadaian?",
        a: "Ya. Karena Dinar KR adalah emas 24K murni, ia bisa diterima di toko emas, pegadaian, bahkan di luar negeri. Namun jika dijual ke Sentra Layanan Dinar (SLD) atau sesama komunitas, harga lebih tinggi dan dibayar di hari yang sama (same day payment) tanpa potongan pajak.",
      },
    ],
  },
  {
    id: "fungsi",
    icon: "🟢",
    title: "C. Fungsi dan Manfaat",
    items: [
      {
        q: "Untuk apa Dinar KR digunakan?",
        a: "Dinar KR bukan alat transaksi harian, tetapi:\n1. Tabungan nilai jangka panjang (hedging anti inflasi)\n2. Instrumen zakat emas (20 dinar = nisab zakat)\n3. Warisan yang adil dan mudah dihitung\n4. Sarana pemberdayaan ekonomi umat",
      },
      {
        q: "Apa hubungan Dinar KR dengan zakat?",
        a: "Rasulullah ﷺ bersabda: \"Apabila engkau memiliki 20 dinar dan telah genap setahun, maka zakatnya setengah dinar.\" (HR. Abu Dawud No. 1573)\n\nArtinya:\n• Nisab zakat = 20 dinar = 85 gram emas\n• Zakatnya = ½ dinar (2,5%) per tahun\n\nJadi, menabung 20 dinar berarti sudah mencapai tingkat muzaki (orang wajib zakat).\nPrinsip Dinar KR: \"Setiap Muslim sebaiknya punya 20 dinar.\"",
      },
      {
        q: 'Mengapa disebut "Menanam dan Memanen Pohon Emas"?',
        a: "Karena Dinar KR mengajarkan konsep saving produktif:\n1. Menanam: rutin membeli emas sesuai kemampuan\n2. Merawat: sabar menyimpan dan tidak tergoda menjual\n3. Memanen: menjual saat dibutuhkan untuk tujuan mulia\n4. Berkah: emas bertambah nilainya, zakatnya mengalir, keberkahan meningkat",
      },
      {
        q: "Mengapa emas disebut aman dari inflasi?",
        a: "Karena nilai emas tetap stabil lintas zaman.\n\nContoh:\n• Zaman Rasulullah ﷺ → 1 dinar bisa beli 1 ekor kambing\n• Sekarang → 1 dinar (±Rp11,8 juta) masih bisa beli 1 kambing berkualitas\n\nArtinya, emas menjaga daya beli dari masa ke masa, sedangkan uang kertas terus turun nilainya karena inflasi.",
      },
    ],
  },
  {
    id: "transaksi",
    icon: "🟢",
    title: "D. Transaksi dan Keanggotaan",
    items: [
      {
        q: "Bagaimana cara membeli Dinar KR?",
        a: "Melalui Sentra Layanan Dinar (SLD) terdekat atau Wakil Resmi (WR). Bisa juga via website resmi: www.dinarkr.com",
      },
      {
        q: "Apakah bisa membeli secara bertahap (cicil)?",
        a: 'Tidak dalam bentuk "cicilan konvensional", tetapi bisa menabung per keping sesuai kemampuan (misalnya ⅛ dinar, ¼ dinar, dst). Sistem ini disebut gradual buying — aman dari riba karena setiap pembelian langsung lunas.',
      },
      {
        q: "Apakah bisa menjadi member atau reseller?",
        a: "Ya, bisa. Syaratnya:\n• Registrasi resmi\n• Membayar lisensi Rp750.000\n• Mendapatkan alat bantu marketing dan akses ke sistem online\n\nKeuntungan:\n1. Dapat harga member (lebih murah)\n2. Dapat poin reward (jalan-jalan, promo)\n3. Dapat fee (rabat) tiap transaksi\n4. Dapat edukasi dan pembinaan bisnis halal",
      },
      {
        q: "Apakah Dinar KR MLM?",
        a: "Bukan MLM. Tidak ada sistem member-get-member. Keuntungan berasal dari rabat penjualan, bukan perekrutan orang. Fokus utamanya adalah edukasi dan syiar ekonomi umat berbasis emas halal.",
      },
    ],
  },
  {
    id: "buyback",
    icon: "🟢",
    title: "E. Buyback & Keamanan",
    items: [
      {
        q: "Bagaimana jika komunitas Dinar KR bubar?",
        a: "Tidak masalah. Karena emas tetap emas — nilainya tidak bergantung pada komunitas. Dinar KR bisa dijual:\n• Ke toko emas manapun\n• Ke pegadaian\n• Ke luar negeri (uji coba: Turki, Mekah, China, Australia)\n• Atau kembali ke kantor pusat PT Dinar KR (harga sesuai tabel)",
      },
      {
        q: "Apakah Dinar KR bisa dipalsukan?",
        a: "Sangat sulit. Karena emas 24K memiliki massa jenis tetap 19,32 g/cm³ dan tidak bisa disamakan dengan logam lain. Bisa diuji dengan:\n• Alat XRF Analyzer\n• Metode air dan timbangan digital (uji densitas sederhana)",
      },
      {
        q: "Berapa selisih jual-beli (spread)?",
        a: "Dinar KR: ± 5–7%\nAntam 5 gram: ± 15–17%\n\nArtinya, nilai Dinar KR lebih efisien untuk simpanan jangka panjang.",
      },
    ],
  },
  {
    id: "komunitas",
    icon: "🟢",
    title: "F. Program & Komunitas",
    items: [
      {
        q: "Apa itu Sentra Layanan Dinar (SLD)?",
        a: "SLD adalah pusat edukasi dan layanan transaksi Dinar KR di setiap kota, dikelola oleh Wakil Resmi (WR) PT DKR. Fungsi utamanya:\n• Edukasi masyarakat tentang emas dan zakat\n• Buyback dinar\n• Penjualan dan keanggotaan resmi",
      },
      {
        q: "Apa saja kegiatan komunitas Dinar KR?",
        a: "1. Kuliah WhatsApp (KulWap) edukatif\n2. Zoom meeting dan pelatihan bisnis\n3. Program reward perjalanan (misal: 80 dinar = tiket ke Bali)\n4. Update harga harian\n5. Kolaborasi zakat dan ekonomi umat",
      },
      {
        q: 'Apa filosofi "20 Dinar untuk Setiap Keluarga Muslim"?',
        a: "20 dinar (≈85 gram emas) adalah simbol kemandirian umat. Bila setiap keluarga Muslim memiliki minimal 20 dinar:\n• Mereka menjadi muzaki (wajib zakat)\n• Umat punya modal zakat untuk memberdayakan yang lain\n• Sistem ekonomi syariah tumbuh dari bawah",
      },
    ],
  },
  {
    id: "syariah",
    icon: "🟢",
    title: "G. Prinsip Syariah & Filosofi",
    items: [
      {
        q: 'Apakah menyimpan emas termasuk "menimbun harta (kanzul mal)"?',
        a: "Tidak, selama:\n• Dizakati tiap tahun\n• Diniatkan untuk kebutuhan dan kemaslahatan keluarga\n• Tidak menghalangi perputaran ekonomi umat\n\n\"Dan orang-orang yang menimbun emas dan perak dan tidak menafkahkannya di jalan Allah, maka beritakanlah kepada mereka azab yang pedih.\" (QS. At-Taubah: 34)\n\nMakna tafsirnya: yang dilarang adalah menyimpan tanpa zakat dan manfaat sosial, bukan menyimpan untuk perlindungan nilai.",
      },
      {
        q: "Apakah menabung Dinar berarti tidak produktif?",
        a: "Sebaliknya. Menabung Dinar adalah fondasi ekonomi produktif — menjaga nilai aset agar tidak tergerus sebelum diinvestasikan ke sektor riil yang halal dan aman.",
      },
    ],
  },
  {
    id: "praktis",
    icon: "🟢",
    title: "I. Pertanyaan Praktis Seputar Transaksi",
    items: [
      {
        q: "Bagaimana cara mengetahui harga Dinar KR terbaru?",
        a: "Harga resmi diperbarui setiap hari oleh PT Dinar Khoiru Roziqin di www.dinarkr.com dan juga dibagikan setiap pagi melalui jaringan Wakil Resmi (WR) dan Sentra Layanan Dinar (SLD) di seluruh Indonesia.\n\nFormat harga mencakup:\n• Harga beli (konsumen)\n• Harga jual kembali (buyback)\n• Selisih harga (spread)\n• Pecahan Dinar (1/8, 1/4, 1/2, 1, 2, 5, 10, 20 Dinar)",
      },
      {
        q: "Apakah bisa membeli pecahan kecil?",
        a: "Ya. Dinar KR memiliki berbagai pecahan:\n• 1/8 Dinar (±0,53 gr) — Mulai menabung ringan\n• 1/4 Dinar (±1,06 gr) — Cocok untuk pemula\n• 1/2 Dinar (±2,12 gr) — Populer di kalangan ibu rumah tangga\n• 1 Dinar (4,25 gr) — Standar internasional\n• 2–20 Dinar (8,5–85 gr) — Cocok untuk zakat, warisan, atau investasi jangka panjang\n\nSetiap kepingan dikemas dalam sertifikat resmi dengan nomor seri unik.",
      },
      {
        q: "Bagaimana jika ingin menjual kembali Dinar KR?",
        a: "Ada dua cara:\n1. Ke Sentra Layanan Dinar (SLD) resmi → Harga sesuai tabel buyback resmi PT DKR, pembayaran same day\n2. Ke toko emas atau pegadaian → Harga mengikuti harga pasar emas dunia\n\nKeuntungan menjual melalui komunitas:\n• Tidak ada pajak penjualan\n• Harga lebih kompetitif (spread kecil)\n• Transaksi cepat dan transparan",
      },
      {
        q: "Bagaimana sistem penyimpanan emas Dinar agar aman?",
        a: "Ada tiga pilihan:\n1. Simpan di rumah — gunakan brankas tahan api atau kotak penyimpanan khusus\n2. Safe Deposit Box (SDB) di bank — biaya sewa tahunan sekitar Rp500 ribu – Rp1 juta\n3. Titip ke Sentra Layanan Dinar (SLD) yang sudah memiliki sistem penyimpanan kolektif aman\n\nPrinsipnya: \"Simpan di tempat aman, tapi jangan sembunyikan dari zakat.\"",
      },
      {
        q: "Bagaimana jika Dinar KR rusak, cacat, atau hilang?",
        a: "Jika rusak (lecet, pecah, tergores) → tetap diterima buyback sesuai kadar emasnya.\n\nJika kehilangan fisik, perlu:\n1. Laporan kehilangan ke kepolisian\n2. Bukti pembelian dan nomor seri sertifikat\n3. Proses verifikasi oleh pihak DinarKR\n\nDKR menekankan transparansi dan kejujuran — semua data pembelian tercatat di sistem pusat.",
      },
      {
        q: "Apakah Dinar KR bisa dijadikan mahar, hadiah, atau wakaf?",
        a: "Sangat bisa! Karena emas adalah mal bernilai syar'i yang diakui dalam fikih Islam.\n\nContoh penggunaannya:\n• Mahar pernikahan: \"Aku nikahkan engkau dengan mahar 1 dinar.\"\n• Hadiah aqiqah atau khitan: koin DinarKR dalam kemasan eksklusif\n• Wakaf produktif: menyalurkan Dinar untuk pembangunan masjid, pesantren, atau beasiswa\n\nNilainya tetap dan membawa keberkahan dunia–akhirat.",
      },
    ],
  },
  {
    id: "edukasi",
    icon: "🟢",
    title: "J. Pertanyaan Seputar Komunitas & Edukasi",
    items: [
      {
        q: "Apa itu Komunitas Magnet Rezeki?",
        a: "Magnet Rezeki adalah komunitas spiritual-ekonomi yang diprakarsai oleh Ustadz Nasrulloh, mengajarkan:\n• Kecerdasan finansial Islami\n• Syukur dan tawakal dalam mencari rezeki\n• Pengelolaan harta berbasis nilai Al-Qur'an\n\nKomunitas ini menaungi program Dinar Khoiru Roziqin sebagai bagian dari gerakan ekonomi umat tanpa riba.",
      },
      {
        q: 'Apa fungsi "Sentra Layanan Dinar" di setiap kota?',
        a: "Sentra Layanan Dinar (SLD) berperan sebagai:\n1. Pusat edukasi dan konsultasi emas\n2. Tempat jual-beli dan buyback resmi\n3. Pusat distribusi dan pendaftaran member\n4. Tempat pelatihan ekonomi umat",
      },
      {
        q: "Apakah ada pelatihan atau pertemuan rutin?",
        a: "Ya. Komunitas Dinar KR rutin mengadakan:\n• Kuliah WhatsApp (KulWap) mingguan\n• Zoom meeting edukatif\n• Pelatihan bisnis halal\n• Program reward perjalanan (contoh: ke Bali bagi pembeli 80 dinar)\n\nTujuannya bukan sekadar menjual emas, tapi membangun generasi Muslim kaya, dermawan, dan produktif.",
      },
      {
        q: 'Apa makna slogan "20 Dinar, Muslim Kaya dan Berzakat"?',
        a: "Slogan ini menggambarkan visi besar DinarKR:\n\"Setiap keluarga Muslim memiliki minimal 20 dinar (≈85 gram emas).\"\n\nMaknanya:\n• 20 dinar = batas muzaki (wajib zakat)\n• Jika seluruh keluarga Muslim mencapainya → ekonomi umat mandiri\n• Harta umat tidak habis oleh inflasi, tapi tumbuh dengan keberkahan",
      },
    ],
  },
  {
    id: "investasi",
    icon: "🟢",
    title: "K. Investasi dan Ekonomi Syariah",
    items: [
      {
        q: "Apakah menabung Dinar termasuk investasi?",
        a: "Bisa disebut investasi syariah jangka panjang, tapi bukan spekulasi.\n\nPerbedaannya:\n• Investasi konvensional: profit jangka pendek, risiko tinggi, ada unsur riba\n• Dinar KR: perlindungan nilai jangka panjang, risiko sangat rendah, tidak ada riba, berdasarkan Sunnah Nabi ﷺ\n\nEmas tidak menjanjikan bunga, tapi nilainya naik alami mengikuti inflasi dunia.",
      },
      {
        q: "Apakah Dinar KR cocok untuk pensiunan?",
        a: "Sangat cocok. Dengan menabung Dinar, hasil kerja keras bertahun-tahun tidak tergerus inflasi, dan tetap bisa membantu anak cucu.\n\nSimulasi:\n• 20 Dinar hari ini (Rp210 juta)\n• 10 tahun ke depan (estimasi kenaikan 20% per tahun) → ≈ Rp1,3 Miliar",
      },
      {
        q: "Kapan waktu terbaik membeli emas atau Dinar?",
        a: "\"Waktu terbaik beli emas adalah 10 tahun lalu. Waktu terbaik berikutnya adalah hari ini.\"\n\nKarena:\n• Harga emas cenderung naik dalam jangka panjang\n• Menunggu harga turun sering berujung kehilangan peluang\n• Lebih baik membeli bertahap setiap bulan (gradual buying)",
      },
      {
        q: "Apakah harga Dinar bisa turun?",
        a: "Dalam jangka pendek bisa fluktuatif, tetapi:\n• Dalam 3 tahun terakhir rata-rata kenaikan harga emas mencapai 30–40% per tahun\n• Bahkan Januari–Oktober 2025, kenaikan DinarKR tercatat +57%\n\nFluktuasi harian bukan kerugian, melainkan gelombang kecil di lautan pertumbuhan jangka panjang.",
      },
      {
        q: "Apakah DinarKR punya hubungan dengan perbankan syariah?",
        a: "DinarKR tidak berada di bawah bank mana pun, namun menjalin kemitraan edukatif dengan lembaga syariah seperti BSI, Pegadaian Syariah, dan lembaga zakat.\n\nTujuannya:\n• Meningkatkan literasi emas syariah\n• Memperkuat jaringan buyback nasional\n• Mendorong zakat dan wakaf berbasis emas",
      },
    ],
  },
  {
    id: "sosial",
    icon: "🟢",
    title: "L. Pertanyaan Sosial & Dakwah",
    items: [
      {
        q: "Apakah DinarKR mendukung ekonomi umat?",
        a: "Ya, inilah misi intinya:\n• Membangun kesadaran saving & zakat\n• Memperkuat perputaran uang antar-Muslim\n• Memberdayakan mustahik lewat zakat produktif\n\nDinarKR percaya, kebangkitan ekonomi umat dimulai dari individu Muslim yang menabung emas dengan niat zakat.",
      },
      {
        q: "Bagaimana peran Dinar dalam kebangkitan zakat?",
        a: "Jika satu keluarga punya 20 dinar dan rutin berzakat (0,5 dinar/tahun), maka miliaran rupiah bisa berputar antarumat.\n\nBayangkan jika:\n• 10.000 keluarga Muslim menabung 20 dinar\n• Zakat tahunan 0,5 dinar = Rp5,9 juta per keluarga\n• Maka terkumpul Rp59 miliar zakat produktif per tahun\n\nInilah fondasi ekonomi mandiri tanpa riba.",
      },
      {
        q: "Bagaimana menghindari niat menimbun (kanzul mal)?",
        a: "Dengan 3 prinsip DinarKR:\n1. Bayarkan zakatnya setiap tahun\n2. Gunakan sebagian untuk sedekah dan pemberdayaan\n3. Niatkan menabung untuk keberkahan, bukan sekadar kekayaan",
      },
      {
        q: "Apa filosofi spiritual menabung emas?",
        a: "• Melatih sabar dan qana'ah\n• Menjaga dari godaan konsumtif\n• Mengingatkan bahwa harta hanyalah amanah\n• Menghidupkan sunnah Rasulullah ﷺ\n\n\"Dinar bukan sekadar emas, tapi alat latihan iman terhadap rezeki.\"",
      },
    ],
  },
  {
    id: "penutup",
    icon: "🟢",
    title: "M. Penutup dan Ajakan",
    items: [
      {
        q: "Mengapa harus mulai sekarang?",
        a: "Karena setiap hari kita menunda, kita kehilangan nilai uang. Emas tidak menunggu siapa pun. Menabung DinarKR bukan hanya keputusan finansial, tapi juga keputusan spiritual — bagian dari jihad ekonomi dan kebangkitan umat.",
      },
      {
        q: "Bagaimana cara mulai?",
        a: "1. Kunjungi situs resmi www.dinarkr.com\n2. Hubungi Wakil Resmi (WR) terdekat\n3. Pilih pecahan dinar sesuai kemampuan\n4. Simpan dengan aman, niatkan ibadah, dan mulai menanam \"pohon emas\"",
      },
      {
        q: "Pesan terakhir dari komunitas Dinar KR",
        a: "\"Menabung Dinar bukan tentang menumpuk harta, tapi menyiapkan keberkahan agar tidak terinjak inflasi dan tidak tergelincir oleh riba.\"\n\n\"20 Dinar untuk setiap keluarga Muslim — agar zakat hidup, umat kuat, dan rezeki penuh berkah.\"",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`faq-answer-wrapper ${isOpen ? "faq-answer-open" : ""}`}>
        <div className="faq-answer">
          {answer.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = activeCategory
    ? faqCategories.filter((c) => c.id === activeCategory)
    : faqCategories;

  return (
    <>
      <nav className="navbar scrolled" style={{ position: "sticky" }}>
        <div className="navbar-content">
          <a href="/" className="navbar-brand">
            <Image
              src="/app-icon.png"
              alt="DinarKu"
              width={40}
              height={40}
              className="navbar-logo"
            />
            <span className="navbar-title">DinarKu</span>
          </a>
          <a href="/" className="navbar-cta">
            ← Kembali
          </a>
        </div>
      </nav>

      <main className="privacy-container">
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="section-label">❓ FAQ</span>
            <h1 className="privacy-title">Pertanyaan yang Sering Diajukan</h1>
            <p className="privacy-intro" style={{ marginTop: 8 }}>
              Mudah Memahami Dinar untuk Menata Masa Depan Lebih Baik
            </p>
          </header>

          <div className="faq-categories">
            <button
              className={`faq-category-btn ${activeCategory === null ? "faq-category-active" : ""}`}
              onClick={() => setActiveCategory(null)}
            >
              Semua
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                className={`faq-category-btn ${activeCategory === cat.id ? "faq-category-active" : ""}`}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
              >
                {cat.title.replace(/^[A-Z]\.\s*/, "")}
              </button>
            ))}
          </div>

          {filteredCategories.map((category) => (
            <section key={category.id} className="faq-section">
              <h2 className="faq-section-title">
                {category.icon} {category.title}
              </h2>
              <div className="faq-list">
                {category.items.map((item, idx) => {
                  const key = `${category.id}-${idx}`;
                  return (
                    <FAQItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={!!openItems[key]}
                      onClick={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </article>
      </main>

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
        </div>
      </footer>
    </>
  );
}
