Daftar Tugas dengan Vanilla JavaScript dan IndexedDB

Aplikasi Daftar Tugas sederhana yang dibuat menggunakan **JavaScript vanilla** dan **IndexedDB**, menampilkan cara menggunakan penyimpanan berbasis browser untuk mengelola tugas secara offline.

## Apa itu IndexedDB?

**IndexedDB** adalah API tingkat rendah yang disediakan oleh browser web modern untuk mengelola data terstruktur dalam jumlah besar. Berbeda dengan `localStorage`, IndexedDB memungkinkan Anda menyimpan struktur data yang lebih kompleks dan menawarkan kemampuan kueri yang kuat.

### Fitur Utama IndexedDB:

- Menyimpan data dalam pasangan nilai kunci.

- Memungkinkan transaksi dan penyimpanan objek untuk penyimpanan data terstruktur.

- Mendukung operasi asinkron untuk menangani kumpulan data besar secara efisien.

- Bekerja offline, sehingga ideal untuk Aplikasi Web Progresif (PWA).

- Menyediakan lebih banyak kapasitas penyimpanan dibandingkan dengan `Penyimpanan lokal`.

### Manfaat Menggunakan IndexedDB dalam Proyek Ini:

- Memungkinkan penyimpanan tugas offline yang persisten.

- Memungkinkan Anda melakukan operasi CRUD (Buat, Baca, Perbarui, Hapus) secara efisien.

- Menangani struktur data yang lebih kompleks (misalnya objek dengan banyak properti).

## Fitur Aplikasi To-Do List:

- **Tambahkan Tugas**: Tambahkan tugas baru dengan detail.

- **Edit Tugas**: Perbarui deskripsi atau status tugas.

- **Hapus Tugas**: Hapus tugas saat tidak diperlukan lagi.

- **Fungsi Offline**: Tugas Anda disimpan secara lokal di browser menggunakan IndexedDB.

## Struktur Proyek:
