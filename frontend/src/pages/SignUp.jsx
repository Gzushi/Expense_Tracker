import { useState } from 'react'
import logo from '../assets/images/Logo&Title.png'
import Footer from "../components/Footer";
import useSignUp from "../hooks/useSignup"
import { useNavigate } from 'react-router-dom'

const createCritic = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const {signup, isLoading, error} = useSignUp()
    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        console.log(username, password, email)
        const data = await signup(username, password, email)

        console.log(data)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const username = "testuser";
    //     const password = "StrongP@ss1!";
    //     const email = "test@example.com";

    //     try {
    //         const res = await fetch("http://localhost:5000/api/users/signup", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include", // needed only if backend sets cookies
    //         body: JSON.stringify({ username, password, email })
    //         });

    //         const data = await res.json();

    //         if (!res.ok) {
    //         console.error("Signup failed:", data.error);
    //         } else {
    //         console.log("Signup success:", data);
    //         }
    //     } catch (err) {
    //         console.error("Network or server error:", err);
    //     }
    // };


  return (
    <div className='bg-[#2B2B2B] text-[#464646] h-screen flex flex-col items-center pt-20'>
        <div className='bg-[#212121] flex flex-col pb-6 px-4 rounded-md'>
            <div>
                <img src={ logo } alt='GameVault' className='h-[70px]'/>
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
                        <input
                        type='text'
                        placeholder='Email'
                        className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type='submit'
                            disabled={isLoading}
                            className='bg-[#38ced0] flex p-1 mt-4 font-medium w-full justify-center text-center border-2 border-[#24b99c] outline-none rounded-md'
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
                    <p>Already have an account?</p>
                    <div
                    onClick={() => navigate('/')}
                    className='text-[#059494] font-bold flex flex-col w-100 gap-2'
                    >
                        <h1>Log In!</h1>
                    </div>
                </div>
        </div>
        <div className="flex justify-center items-end w-full h-full box-border">
            <Footer />
        </div>
    </div>
  )
}

export default createCritic