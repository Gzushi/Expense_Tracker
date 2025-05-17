import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = ({children}) => {
  return (
    <div className="w-full min-h-screen box-border grid grid-row-[auto_1fr_auto]">
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default DefaultLayout