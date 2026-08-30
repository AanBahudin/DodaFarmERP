import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  Wallet,
  CreditCard,
  Package2,
  ShoppingBag,
  Truck,
  Contact,
  Users2
} from "lucide-react"

const sidebarMenu = [
  {
    title: "Dashboard",
    url: '/',
    icon: LayoutDashboard,
    items: [],
  },
  {
    title: "Data Karyawan",
    url: '/karyawan',
    icon: Users,
    items: [
      { title: "Semua Karyawan", url: "/karyawan" },
      { title: "Tambah Karyawan", url: "/karyawan/tambah" },
    ],
  },
  {
    title: "Produk",
    url: '/product',
    icon: Package,
    items: [
      { title: "Semua Produk", url: "/product" },
      { title: "Tambah Produk", url: "/product/tambah" },
      { title: "Kategori", url: "/product/kategori" },
      { title: "Stok Produk", url: "/product/stok" },
    ],
  },
  {
    title: "Penjualan",
    url: '/penjualan',
    icon: ShoppingBag,
    items: [
      { title: "Ringkasan", url: "/penjualan" },
      { title: "Tambah Penjualan", url: "/penjualan/tambah" },
      { title: "Transaksi", url: "/penjualan/transaksi" },
      { title: "Laporan", url: "/penjualan/report" },
    ]
  },
  {
    title: "Pemasukan",
    url: '/pemasukan',
    icon: Wallet,
    items: [
      { title: "Ringkasan", url: "/pemasukan" },
      { title: "Tambah", url: "/pemasukan/tambah" },
      { title: "Transaksi", url: "/pemasukan/transaksi" },
      { title: "Laporan", url: "/pemasukan/report" },
    ]
  },
  {
    title: "Pengeluaran",
    url: '/pengeluaran',
    icon: CreditCard,
    items: [
        { title: "Ringkasan", url: "/pengeluaran" },
        { title: "Transaksi", url: "/pengeluaran/categories" },
        { title: "Kategori Pengeluaran", url: "/pengeluaran/categories" },
        { title: "Laporan", url: "/pengeluaran/categories" },
    ]
  },
  {
    title: "Pesanan",
    icon: Package2,
    url: '/pesanan',
    items: []
  },
  {
    title: "Pengiriman",
    icon: Truck,
    url: '/pesanan',
    items: []
  },
  {
    title: "Suppliers",
    url: '/suppliers',
    icon: Contact,
    items: [
        { title: "Ringkasan", url: "/suppliers" },
        { title: "Transaksi", url: "/suppliers/categories" },
        { title: "Kategori Pengeluaran", url: "/suppliers/categories" },
        { title: "Laporan", url: "/suppliers/categories" },
    ]
  },
  {
    title: "Pengguna",
    url: '/pengguna',
    icon: Users2,
    items: [
        { title: "Ringkasan", url: "/pengguna" },
        { title: "Pelanggan", url: "/pengguna/categories" },
        { title: "Mitra", url: "/pengguna/categories" },
        { title: "Laporan", url: "/pengguna/categories" },
    ]
  },
  {
    title: "Pengaturan",
    url: '/pengaturan',
    icon: Settings,
    items: [
      { title: "General", url: "/settings" },
      { title: "Security", url: "/settings/security" },
    ],
  },
]

export default sidebarMenu