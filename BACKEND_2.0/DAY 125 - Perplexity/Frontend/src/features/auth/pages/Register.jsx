import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const loading = useSelector((state) => state.auth.loading)

    const { handleRegister } = useAuth()

    const submitForm = async (e) => {
        e.preventDefault()

        const payload = {
            username,
            email,
            password,
        }

        await handleRegister(payload)
        navigate("/verify")
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#141413] to-[#0f0f0f] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8 animate-fade-in animate-gradient">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-[#d97757]/50 bg-[#141413]/90 p-8 shadow-2xl shadow-[#ff6b35]/30 backdrop-blur-md animate-slide-in-up animate-glow">
                    <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#d97757] to-[#ff6b35] bg-clip-text mb-2">
                        Create Account
                    </h1>
                    <p className="text-sm text-zinc-300 mb-8">
                        Register with your username, email, and password.
                    </p>

                    <form onSubmit={submitForm} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="mb-2 block text-sm font-medium text-zinc-200">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder="Choose a username"
                                required
                                className="w-full rounded-lg border border-zinc-600 bg-[#141413]/95 px-4 py-3 text-zinc-100 outline-none ring-0 transition-all duration-300 focus:border-[#d97757] focus:shadow-[0_0_0_4px_rgba(217,119,87,0.3)] hover:shadow-lg hover:border-zinc-500"
                            />
                        </div>

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
                                className="w-full rounded-lg border border-zinc-600 bg-[#141413]/95 px-4 py-3 text-zinc-100 outline-none ring-0 transition-all duration-300 focus:border-[#d97757] focus:shadow-[0_0_0_4px_rgba(217,119,87,0.3)] hover:shadow-lg hover:border-zinc-500"
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
                                placeholder="Create a password"
                                required
                                className="w-full rounded-lg border border-zinc-600 bg-[#141413]/95 px-4 py-3 text-zinc-100 outline-none ring-0 transition-all duration-300 focus:border-[#d97757] focus:shadow-[0_0_0_4px_rgba(217,119,87,0.3)] hover:shadow-lg hover:border-zinc-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-gradient-to-r from-[#d97757] to-[#ff6b35] px-4 py-3 font-semibold cursor-pointer text-zinc-100 transition-all duration-300 hover:from-[#ff6b35] hover:to-[#cf6440] hover:scale-99 hover:shadow-xl focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-zinc-300">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-[#da582d] transition-colors duration-300 hover:text-[#ff6b35]">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Register