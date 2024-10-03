import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Home from './pages/home'
import AddPageId from './pages/addPageId';
import {loader as sendToken} from './utils/checktoken';
import {loader as homeLoader} from './utils/homeloader';
import Signup from './pages/signup';
import Login from './pages/login';
import AdminId from './pages/adminId';
import Settings from './pages/settings';
import SearchPage from './pages/searchPage';

const router = createBrowserRouter([
  {path: '/' , element:<Home/>, loader: homeLoader},
  {path: '/login', element:<Login/>},
  {path: '/signup', element:<Signup/>},
  {path: '/addpageid/:email', element:<AddPageId/>, loader: sendToken},
  {path: '/admin/:email/:id', element:<AdminId/>, loader: sendToken},
  {path: '/admin/:email/:id/settings', element:<Settings/>, loader: sendToken},
  {path: '/admin/:email/:id/:search', element:<SearchPage/>, loader: sendToken}
])
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    
    <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
