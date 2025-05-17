import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { AuthContextProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LogIn />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </StrictMode>
)
