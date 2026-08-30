import { createBrowserRouter, RouterProvider } from 'react-router'
import {mainRouter} from './routes'

const App = () => {

  const route = createBrowserRouter(mainRouter)

  return (
    <div className='w-full'>
      <RouterProvider router={route} />
    </div>

  )
}

export default App