import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Add from '../components/Add'

const Dashboard = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/home")
    }

  return (
    <div className='bg-[#000819] text-[#464646] min-h-screen'>
        <Header />
        <Add />
    </div>
  )

}

export default Dashboard