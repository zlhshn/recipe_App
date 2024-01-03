import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {

  const { currentUser } = useAuthContext();
  return (
   currentUser ? (<><Navbar/> <Outlet/></>) : (<Navigate to= "/login"/>)
  )
}

export default PrivateRouter