import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar'
const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken?(
    <div className='bg-[£F8F9FD]'>
     
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start '>
        <Sidebar/>
        
      </div>
    </div>
  ):(
    <>
     <Login/>
     <ToastContainer/>
    </>
  )
}

export default App