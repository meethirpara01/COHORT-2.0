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
        <section className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#141413] to-[#0f0f0f] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8 animate-fade-in animate-gradient">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-lg rounded-2xl border border-[#d97757]/50 bg-[#141413]/90 p-8 shadow-2xl shadow-[#ff6b35]/30 backdrop-blur-md animate-slide-in-up animate-glow">
                    <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#d97757] to-[#ff6b35] bg-clip-text mb-2 whitespace-nowrap">
                        Registration Successful!
                    </h1>
                    <p className="text-sm text-zinc-300 mb-4">
                        Please check your email and verify your account to complete the registration process.
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