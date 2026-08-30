import type { RouteObject } from "react-router";
import { AddIncomePage, DetailIncomePage, IncomePage } from "../pages";


const incomeRoutes: RouteObject = {
    path: 'income',
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
            path: ':id',
            element: <DetailIncomePage />
        }
    ]
}

export default incomeRoutes