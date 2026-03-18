import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'


const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)

    const { handleLogin } = useAuth()

    const navigate = useNavigate()

    const submitForm = async (event) => {
        event.preventDefault()

        const payload = {
            email,
            password,
        }

        await handleLogin(payload)
        navigate("/")

    }

    if(!loading && user){
        return <Navigate to="/" replace />
    }

    return (
        <section className="min-h-screen bg-[#141413] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-[#c26749]/40 bg-[#141413]/70 p-8 shadow-2xl shadow-black/50 backdrop-blur">
                    <h1 className="text-3xl font-bold text-[#c26749]">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-zinc-300">
                        Sign in with your email and password.
                    </p>

                    <form onSubmit={submitForm} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-[#141413]/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#c26749] focus:shadow-[0_0_0_3px_rgba(20,20,19,0.15)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-[#141413]/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#c26749] focus:shadow-[0_0_0_3px_rgba(20,20,19,0.15)]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#c26749] px-4 py-3 font-semibold text-zinc-100 transition hover:bg-[#c26749] focus:outline-none focus:shadow-[0_0_0_3px_rgba(20,20,19,0.15)]"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-zinc-300">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="font-semibold text-[#d97757] transition hover:text-[#d97757]">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login