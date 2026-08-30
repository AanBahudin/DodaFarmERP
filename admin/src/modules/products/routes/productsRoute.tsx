import type { RouteObject } from "react-router";
import { AddProductPage, ProductCategory, ProductsPage, ProductStockPage } from "../pages";

const productsRoute : RouteObject = {
    path: 'product',
    children: [
        {
            index: true,
            element: <ProductsPage />
        },
        {
            path: 'tambah',
            element: <AddProductPage />
        },
        {
            path: 'kategori',
            element: <ProductCategory />
        },
        {
            path: 'stok',
            element: <ProductStockPage />
        }
    ]
}

export default productsRoute