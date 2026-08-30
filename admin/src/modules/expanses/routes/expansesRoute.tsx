import type { RouteObject } from "react-router";
import { AddExpansesPage, ExpansesPage } from "../pages";
import DetailExpansePage from "../pages/DetailExpansePage";

const expansesRoute : RouteObject = {
    path: '/pengeluaran',
    children: [
        {
            index: true,
            element: <ExpansesPage />
        },
        {
            path: 'tambah',
            element: <AddExpansesPage />
        },
        {
            path: ':id',
            element: <DetailExpansePage />
        }
    ]
}

export default expansesRoute