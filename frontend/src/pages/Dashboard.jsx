import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Dashboard = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/home")
    }

  return (
    <div className='bg-[#2B2B2B] text-[#464646]'>
        <Header />
        <div className='bg-[#212121] flex flex-col w-fit pb-6 px-4 rounded-md'>
            <div className='flex flex-col w-full items-center'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <button onClick={handleClick} className='bg-[#38ced0] flex p-1 mt-4 font-medium w-full justify-center text-center border-2 border-[#24b99c] outline-none rounded-md'>
                    Go to Home
                </button>
            </div>
        </div>
    </div>
  )

}

export default Dashboard