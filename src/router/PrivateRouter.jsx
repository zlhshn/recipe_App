import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuthContext } from "../context/AuthContext";
import Footer from '../components/Footer';

const PrivateRouter = () => {

  const { currentUser } = useAuthContext();
  return (
   currentUser ? (<><Navbar/> <Outlet/><Footer/></>) : (<Navigate to= "/login"/>)
  )
}

export default PrivateRouter