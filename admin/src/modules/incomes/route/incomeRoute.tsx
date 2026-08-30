import type { RouteObject } from "react-router";
import { AddIncomePage, DetailIncomePage, IncomePage, IncomeReportPage } from "../pages";
import IncomeTransactionPage from "../pages/IncomeTransactionPage";


const incomeRoutes: RouteObject = {
    path: 'pemasukan',
    children: [
        {
            index: true,
            element: <IncomePage />
        },
        {
            path: 'tambah',
            element: <AddIncomePage />
        },
        {
            path: 'transaksi',
            element: <IncomeTransactionPage />
        },
        {
            path: ':id',
            element: <DetailIncomePage />
        },
        {
            path: "report",
            element: <IncomeReportPage />
        }
    ]
}

export default incomeRoutes