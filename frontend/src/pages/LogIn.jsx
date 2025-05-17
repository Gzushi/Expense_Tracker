import React, { useState } from 'react'
import logo from '../assets/images/Logo&Title.png'
import Footer from '../components/Footer'
import useLogin from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {login, isLoading, error} = useLogin()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
        navigate("/home")
    }
    const navigate = useNavigate()
    return (
        <div className='bg-[#2B2B2B] text-[#464646] h-screen flex flex-col items-center pt-20'>
            <div className='bg-[#212121] flex flex-col w-fit pb-6 px-4 rounded-md'>
                <div>
                    <img src={logo} alt='GameVault' className='h-[70px]' />
                </div>
                <div className='flex flex-col w-full items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-1 justify-center'>
                        <div>
                            <input
                                type='text'
                                placeholder='Username'
                                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                placeholder='Password'
                                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type='submit'
                                disabled={isLoading}
                                className='bg-[#38ced0] flex p-1 mt-4 w-full font-medium justify-center text-center border-2 border-[#24b99c] outline-none rounded-md'
                            >
                                Submit
                            </button>
                            {error && <div>{error}</div>}
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='flex flex-row py-5'>
                    <p>__________________</p>
                    <p className='px-4'>or</p>
                    <p>__________________</p>
                </div>
                <div className='bg-[#212121] p-2 flex flex-row gap-2 rounded-md'>
                    <p>Don't have an account?</p>
                    <div
                    onClick={() => navigate('/signup')}
                    className='text-[#059494] font-bold flex flex-col w-100 gap-2'>
                    <h1>Sign Up!</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-end w-full h-full box-border'>
                <Footer />
            </div>
        </div>
    )
}

export default LogIn
