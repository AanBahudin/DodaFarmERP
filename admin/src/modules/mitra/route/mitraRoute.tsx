import type { RouteObject } from "react-router";
import { DetailMitraPage, MitraPage } from "../pages";


const mitraRoute : RouteObject = {
    path: 'mitra',
    children: [
        {
            index: true,
            element: <MitraPage />
        },
        {
            path: ':id',
            element: <DetailMitraPage />
        }
    ]
}

export default mitraRoute