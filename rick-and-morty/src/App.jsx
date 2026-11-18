import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import NavBar from './components/NavBar'
import './App.css'

function App(){

  return (
    <>
      <NavBar />
      <Outlet />
  </>
)}

export default App