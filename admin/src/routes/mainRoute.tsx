
import { HomeLayout } from '@/layout'
import { LoginPage } from '@/modules/authentication/pages'
import DashboardPage from '@/modules/dashboard/pages/DashboardPage'
import employeeRoute from '@/modules/employees/route/employeeRoute'
import expansesRoute from '@/modules/expanses/routes/expansesRoute'
import incomeRoutes from '@/modules/incomes/route/incomeRoute'
import mitraRoute from '@/modules/mitra/route/mitraRoute'
import orderRoute from '@/modules/orders/route/ordersRoute'
import productsRoute from '@/modules/products/routes/productsRoute'
import salesRoute from '@/modules/sales/route/salesRoute'

const mainRoute = [
    {
        path: '/auth',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            // karyawan route
            {...employeeRoute},
            // expanses route
            {...expansesRoute},
            // income route,
            {...incomeRoutes},
            // mitra page
            {...mitraRoute},
            // expanses route
            {...orderRoute},
            // product route
            {...productsRoute},
            // transaksi route
            {...salesRoute},
            // income route
            {...incomeRoutes}

        ]
    }
]

export default mainRoute