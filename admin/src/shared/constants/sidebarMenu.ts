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
    baseUrl: '/karyawan',
    icon: Users,
    items: [
      { title: "Semua Karyawan", url: "." },
      { title: "Tambah Karyawan", url: "/karyawan/tambah" },
    ],
  },
  {
    title: "Produk",
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
    icon: CreditCard,
    items: [
        { title: "Ringkasan", url: "/products" },
        { title: "Transaksi", url: "/products/categories" },
        { title: "Kategori Pengeluaran", url: "/products/categories" },
        { title: "Laporan", url: "/products/categories" },
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
    icon: Contact,
    items: [
        { title: "Ringkasan", url: "/products" },
        { title: "Transaksi", url: "/products/categories" },
        { title: "Kategori Pengeluaran", url: "/products/categories" },
        { title: "Laporan", url: "/products/categories" },
    ]
  },
  {
    title: "Pengguna",
    icon: Users2,
    items: [
        { title: "Ringkasan", url: "/products" },
        { title: "Pelanggan", url: "/products/categories" },
        { title: "Mitra", url: "/products/categories" },
        { title: "Laporan", url: "/products/categories" },
    ]
  },
  {
    title: "Pengaturan",
    icon: Settings,
    items: [
      { title: "General", url: "/settings" },
      { title: "Security", url: "/settings/security" },
    ],
  },
]

export default sidebarMenu