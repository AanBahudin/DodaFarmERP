import { Outlet } from "react-router"


const HomeLayout = () => {
  return (
    <div className="w-screen">
      <Outlet />
    </div>
  )
}

export default HomeLayout