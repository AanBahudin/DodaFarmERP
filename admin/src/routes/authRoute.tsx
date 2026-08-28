import {createBrowserRouter} from 'react-router'
import { LoginPage } from '@/modules/authentication/pages'

const authRouter = createBrowserRouter([
    {
        path: '/auth',
        children: [
            {index: true, id: 'login', element: <LoginPage />}
        ]
    }
])

export default authRouter