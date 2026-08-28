import {authRouter} from './routes'
import { RouterProvider } from 'react-router'

const App = () => {
  return (
    <div className='w-full'>
      <RouterProvider router={authRouter} />
    </div>

  )
}

export default App