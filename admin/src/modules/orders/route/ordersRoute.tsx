import type { RouteObject } from "react-router";
import { DetailOrderPage, OrdersPage } from "../pages";

const orderRoute : RouteObject = {
    path: '/pesanan',
    children: [
        {
            index: true,
            element: <OrdersPage />
        },
        {
            path: ":id",
            element: <DetailOrderPage />
        }
    ]
}

export default orderRoute