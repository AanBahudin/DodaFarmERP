import type { RouteObject } from "react-router";
import { AddEmployeePage, DetailEmployeePage, EditEmployeePage, EmployeePage } from '@/modules/employees/pages'

const employeeRoute : RouteObject = {
    path: 'karyawan',
    children: [
        {
            index: true,
            element: <EmployeePage />
        },
        {
            path: 'tambah',
            element: <AddEmployeePage />
        },
        {
            path: 'edit/:id',
            element: <EditEmployeePage />
        },
        {
            path: ':id',
            element: <DetailEmployeePage />
        }
    ]
}

export default employeeRoute