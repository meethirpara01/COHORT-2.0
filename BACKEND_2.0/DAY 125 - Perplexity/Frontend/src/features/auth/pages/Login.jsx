import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const user = useSelector((state) => state.auth.user)
    const loading = useSelector((state) => state.auth.loading)

    const { handleLogin } = useAuth()

    const submitForm = async (e) => {
        e.preventDefault()

        const payload = {
            email,
            password,
        }

        await handleLogin(payload)
        navigate("/")
    }

    if (!loading && user) {
        return <Navigate to="/" />
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-[#131313] px-4 py-10 text-white sm:px-6 lg:px-8 animate-fade-in">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-[#0e0e0e]/95 p-8 shadow-xl shadow-zinc-900 backdrop-blur-md animate-slide-in-up">
                    <div className="mb-5 text-center">
                        <span className="inline-flex items-center rounded-full bg-zinc-900/80 px-4 py-1 text-xs font-semibold tracking-wider text-white ring-1 ring-zinc-600">
                            Perplexity
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-zinc-300 mb-8">
                        Sign in with your email and password.
                    </p>

                    <form onSubmit={submitForm} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-[#121212] px-4 py-3 text-white outline-none ring-0 transition-all duration-300 focus:border-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-[#121212] px-4 py-3 text-white outline-none ring-0 transition-all duration-300 focus:border-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg border border-white bg-white cursor-pointer px-4 py-3 font-semibold text-black transition-all duration-200 hover:bg-zinc-100 active:scale-99 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-zinc-300">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-white hover:text-zinc-200">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login