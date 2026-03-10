import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - DinarKu",
  description:
    "Kebijakan Privasi aplikasi DinarKu — Dinar Gold Investment & Zakat Tracker.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Navbar */}
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
            <span className="section-label">📜 Legal</span>
            <h1 className="privacy-title">Kebijakan Privasi</h1>
            <p className="privacy-date">Terakhir diperbarui: 6 Maret 2026</p>
          </header>

          <p className="privacy-intro">
            Selamat datang di <strong>DinarKu</strong> — aplikasi pencatat
            kepemilikan Dinar/Emas dan pelacak Zakat. Kami sangat menghargai
            privasi Anda. Kebijakan privasi ini menjelaskan bagaimana aplikasi
            DinarKu menangani data Anda, termasuk jenis data yang dikumpulkan,
            disimpan, dan diproses.
          </p>
          <p className="privacy-intro">
            Dengan menggunakan aplikasi DinarKu, Anda menyetujui pengumpulan dan
            penggunaan informasi sesuai dengan kebijakan ini.
          </p>

          <section className="privacy-section">
            <h2>1. Prinsip Utama: Lokal Terlebih Dahulu (Local-First)</h2>
            <p>
              DinarKu dibangun dengan prinsip{" "}
              <strong>&quot;Local-First&quot;</strong>, yang berarti:
            </p>
            <ul>
              <li>
                <strong>
                  Semua data kepemilikan Dinar/Emas Anda disimpan secara lokal
                </strong>{" "}
                di perangkat Anda menggunakan database SQLite.
              </li>
              <li>
                <strong>Data transaksi</strong> (pembelian, penjualan, riwayat
                investasi){" "}
                <strong>tidak pernah dikirim ke server eksternal</strong>.
              </li>
              <li>
                <strong>Data Dompet Impian</strong> (alokasi dan target
                tabungan) tersimpan sepenuhnya di perangkat Anda.
              </li>
              <li>
                <strong>Data perhitungan Zakat</strong> disimpan dan dihitung
                secara lokal di perangkat Anda.
              </li>
              <li>
                <strong>Anda memiliki kendali penuh</strong> atas data Anda.
                Data tidak disinkronkan ke cloud atau server pihak ketiga
                kecuali disebutkan secara eksplisit dalam kebijakan ini.
              </li>
            </ul>
            <div className="privacy-note">
              <strong>⚠️ Catatan:</strong> Karena data disimpan secara lokal,
              menghapus aplikasi atau melakukan reset pabrik pada perangkat Anda
              akan mengakibatkan <strong>hilangnya seluruh data</strong> yang
              tersimpan. Kami menyarankan Anda untuk melakukan pencadangan data
              secara berkala.
            </div>
          </section>

          <section className="privacy-section">
            <h2>2. Data yang Diambil Melalui Jaringan</h2>
            <p>
              DinarKu hanya menggunakan koneksi jaringan (internet) untuk
              keperluan berikut:
            </p>

            <h3>2.1 Data Harga Emas/Dinar</h3>
            <ul>
              <li>
                Aplikasi mengambil{" "}
                <strong>data harga Emas/Dinar terkini</strong> dari layanan
                pihak ketiga melalui jaringan internet.
              </li>
              <li>
                Data harga ini digunakan untuk menampilkan nilai portofolio Anda
                secara real-time dan menghitung pertumbuhan investasi.
              </li>
              <li>
                <strong>
                  Tidak ada data pribadi atau data kepemilikan Anda yang
                  dikirimkan
                </strong>{" "}
                saat mengambil data harga.
              </li>
            </ul>

            <h3>2.2 Autentikasi Pengguna (Login/Registrasi)</h3>
            <ul>
              <li>
                Saat mendaftar, DinarKu mengumpulkan{" "}
                <strong>alamat email Anda</strong> untuk keperluan autentikasi
                (login).
              </li>
              <li>
                Alamat email Anda disimpan secara aman di layanan{" "}
                <strong>Supabase</strong> yang digunakan sebagai penyedia
                autentikasi.
              </li>
              <li>
                Alamat email Anda{" "}
                <strong>hanya digunakan untuk proses login</strong> dan tidak
                akan dibagikan kepada pihak ketiga untuk tujuan pemasaran atau
                keperluan lainnya.
              </li>
            </ul>

            <h3>2.3 Notifikasi Push (Firebase Cloud Messaging)</h3>
            <ul>
              <li>
                DinarKu menggunakan layanan{" "}
                <strong>Firebase Cloud Messaging (FCM)</strong> dari Google
                untuk mengirimkan notifikasi push.
              </li>
              <li>
                FCM menggunakan <strong>token perangkat</strong> untuk
                mengirimkan notifikasi. Token ini adalah pengenal anonim yang
                tidak mengidentifikasi Anda secara pribadi.
              </li>
              <li>
                Kami tidak mengumpulkan, menyimpan, atau membagikan informasi
                pribadi Anda melalui layanan notifikasi ini.
              </li>
            </ul>

            <h3>2.4 Google Fonts</h3>
            <ul>
              <li>
                Aplikasi menggunakan layanan <strong>Google Fonts</strong> untuk
                mengunduh font yang digunakan dalam tampilan antarmuka.
              </li>
              <li>
                Permintaan ini tunduk pada{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kebijakan Privasi Google
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Data yang Disimpan Secara Lokal</h2>
            <p>Berikut adalah jenis data yang disimpan di perangkat Anda:</p>
            <div className="privacy-table-wrapper">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Jenis Data</th>
                    <th>Deskripsi</th>
                    <th>Lokasi Penyimpanan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Kepemilikan Dinar/Emas</td>
                    <td>
                      Jumlah, denominasi, dan detail produk emas yang Anda
                      miliki
                    </td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                  <tr>
                    <td>Riwayat Transaksi</td>
                    <td>
                      Catatan pembelian, penjualan, harga beli, dan tanggal
                      transaksi
                    </td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                  <tr>
                    <td>Dompet Impian</td>
                    <td>Alokasi dana dan target tabungan Dinar</td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                  <tr>
                    <td>Data Zakat</td>
                    <td>Perhitungan dan riwayat zakat Anda</td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                  <tr>
                    <td>Riwayat Harga</td>
                    <td>
                      Data historis harga Emas/Dinar untuk grafik pertumbuhan
                    </td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                  <tr>
                    <td>Riwayat Notifikasi</td>
                    <td>Notifikasi yang pernah diterima</td>
                    <td>Database lokal (SQLite)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="privacy-section">
            <h2>4. Data yang TIDAK Kami Kumpulkan</h2>
            <p>
              Selain alamat email untuk autentikasi, DinarKu{" "}
              <strong>tidak mengumpulkan</strong> data berikut:
            </p>
            <ul className="privacy-no-collect">
              <li>
                ❌ Nama lengkap, nomor telepon, atau informasi identitas pribadi
                lainnya
              </li>
              <li>❌ Lokasi atau data GPS</li>
              <li>❌ Kontak atau daftar telepon</li>
              <li>❌ Foto, video, atau file media</li>
              <li>❌ Riwayat penelusuran atau aktivitas internet</li>
              <li>❌ Data keuangan dari aplikasi atau layanan lain</li>
              <li>
                ❌ Data analitik atau pelacakan pengguna (tracking/analytics)
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Izin Aplikasi</h2>
            <p>DinarKu memerlukan izin berikut pada perangkat Anda:</p>
            <div className="privacy-table-wrapper">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Izin</th>
                    <th>Tujuan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Akses Internet</strong>
                    </td>
                    <td>
                      Mengambil data harga Emas/Dinar terkini dan menerima
                      notifikasi push
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Notifikasi</strong>
                    </td>
                    <td>
                      Menampilkan notifikasi push dari Firebase Cloud Messaging
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Aplikasi ini <strong>tidak memerlukan</strong> izin untuk
              mengakses kamera, mikrofon, lokasi, kontak, atau penyimpanan
              eksternal.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Keamanan Data</h2>
            <ul>
              <li>
                Semua data disimpan secara lokal di perangkat Anda dan
                dilindungi oleh mekanisme keamanan bawaan sistem operasi
                perangkat Anda (Android/iOS).
              </li>
              <li>
                Kami tidak memiliki akses ke data yang tersimpan di perangkat
                Anda.
              </li>
              <li>
                Kami menyarankan Anda untuk menggunakan fitur keamanan perangkat
                seperti kunci layar (PIN, sidik jari, atau Face ID) untuk
                melindungi akses ke data Anda.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Layanan Pihak Ketiga</h2>
            <p>DinarKu menggunakan layanan pihak ketiga berikut:</p>
            <div className="privacy-table-wrapper">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Layanan</th>
                    <th>Tujuan</th>
                    <th>Kebijakan Privasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Supabase</strong>
                    </td>
                    <td>Autentikasi pengguna (login/registrasi)</td>
                    <td>
                      <a
                        href="https://supabase.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kebijakan Privasi Supabase
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Firebase Cloud Messaging</strong>
                    </td>
                    <td>Notifikasi push</td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kebijakan Privasi Google
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Google Fonts</strong>
                    </td>
                    <td>Tampilan font antarmuka</td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kebijakan Privasi Google
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Kami menyarankan Anda untuk membaca kebijakan privasi dari layanan
              pihak ketiga yang digunakan.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Privasi Anak-Anak</h2>
            <p>
              DinarKu tidak ditujukan untuk anak-anak di bawah usia 13 tahun.
              Kami tidak secara sengaja mengumpulkan informasi pribadi dari
              anak-anak. Jika Anda adalah orang tua atau wali dan mengetahui
              bahwa anak Anda telah memberikan informasi pribadi kepada kami,
              silakan hubungi kami agar kami dapat mengambil tindakan yang
              diperlukan.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Perubahan akan diberitahukan melalui pembaruan aplikasi atau
              notifikasi di dalam aplikasi. Kami menyarankan Anda untuk meninjau
              kebijakan ini secara berkala.
            </p>
            <p>
              Tanggal efektif kebijakan privasi ini tertera di bagian atas
              dokumen ini.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan atau saran mengenai Kebijakan
              Privasi ini, jangan ragu untuk menghubungi kami:
            </p>
            <ul>
              <li>📧 Email: mnurfath33@gmail.com</li>
              <li>
                🌐 Repository:{" "}
                <a
                  href="https://github.com/mnurfath/dinarku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/mnurfath/dinarku
                </a>
              </li>
            </ul>
          </section>

          <p className="privacy-version">
            <em>
              Kebijakan Privasi ini berlaku untuk aplikasi DinarKu versi 0.1.0
              dan seterusnya.
            </em>
          </p>
        </article>
      </main>

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
        </div>
      </footer>
    </>
  );
}
