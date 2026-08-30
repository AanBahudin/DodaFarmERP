
import { HomeLayout } from '@/layout'
import { LoginPage } from '@/modules/authentication/pages'
import DashboardPage from '@/modules/dashboard/pages/DashboardPage'
import employeeRoute from '@/modules/employees/route/employeeRoute'
import expansesRoute from '@/modules/expanses/routes/expansesRoute'
import incomeRoutes from '@/modules/incomes/route/incomeRoute'
import mitraRoute from '@/modules/mitra/route/mitraRoute'

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
            {...mitraRoute}
        ]
    }
]

export default mainRoute