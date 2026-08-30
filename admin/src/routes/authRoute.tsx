import {type RouteObject} from 'react-router'
import { LoginPage } from '@/modules/authentication/pages'

const authRouter: RouteObject[] = [
    {
        path: '/auth',
        element: <LoginPage />
    }
]

export default authRouter