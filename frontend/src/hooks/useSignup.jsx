import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (username, password, email) => {
        setError(null)
        setIsLoading(true)

        try {
            const res = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include", // needed only if backend sets cookies
                body: JSON.stringify({ username, password, email })
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Signup failed:", data.error);
                setIsLoading(false)
                setError(json.error)
            } else {
                console.log("Signup success:", data);
                localStorage.setItem("user", JSON.stringify(data))
                dispatch({type: "LOGIN", payload: json})
                setIsLoading(false)
            }
        } catch (err) {
            console.error("Network or server error:", err);
        }

        // const response = await fetch("api/users/signup", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({username, password, email})
        // })

        // const json = await response.json()

        // if (!response.ok) {
        //     setIsLoading(false)
        //     setError(json.error)
        // }

        // if (response.ok) {
        //     localStorage.setItem("user", JSON.stringify(json))
        //     dispatch({type: "LOGIN", payload: json})
        //     setIsLoading(false)
        // }
    }

    return {signup, isLoading, error}
}

export default useSignup