
import { Route, Routes } from 'react-router-dom'
import './App.css'




import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Add from './Pages/Add'
import Shop from './Pages/Shop'
import List from './Pages/List'
import  Order  from './Pages/Order'
import ListShop from './Pages/ListShop'


function App() {
 
  const url=import.meta.env.VITE_API_URL
  return (
    <div className='bg-black'>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/shop' element={<Shop url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/listShop' element={<ListShop url={url}/>} />
          <Route path='/order' element={<Order url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
