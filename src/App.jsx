import Footer from "./components/Footer/Footer"
import Navbar from "./components/Header/Navbar"
import { Outlet } from "react-router-dom"
import React from "react";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
