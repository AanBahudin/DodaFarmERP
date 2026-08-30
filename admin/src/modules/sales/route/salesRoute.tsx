import type { RouteObject } from "react-router";
import { SalesPage, SalesReportPage, SalesTransaksiPage } from "../pages";


const salesRoute : RouteObject = {
    path: 'penjualan',
    children: [
        {
            index: true,
            element: <SalesPage />
        },
        {
            path: 'transaksi',
            element: <SalesTransaksiPage />
        },
        {
            path: 'report',
            element: <SalesReportPage />
        },
    ]
}

export default salesRoute