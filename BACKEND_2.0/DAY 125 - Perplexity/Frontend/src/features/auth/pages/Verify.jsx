import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Verify = () => {
    const [countdown, setCountdown] = useState(20)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    navigate('/login')
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [navigate])

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-[#131313] px-4 py-10 text-white sm:px-6 lg:px-8 animate-fade-in">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-lg rounded-2xl border border-zinc-700 bg-[#0e0e0e]/95 p-8 shadow-xl shadow-zinc-900 backdrop-blur-md animate-slide-in-up">
                    <div className="mb-5 text-center">
                        <span className="inline-flex items-center rounded-full bg-zinc-900/80 px-4 py-1 text-xs font-semibold tracking-wider text-white ring-1 ring-zinc-600">
                            Perplexity
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2 whitespace-nowrap">
                        Registration Successful!
                    </h1>
                    <p className="text-sm text-zinc-300 mb-4">
                        Check your email to verify and complete account setup.
                    </p>
                    <p className="text-sm text-zinc-400">
                        Redirecting to login page in {countdown} seconds...
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Verify