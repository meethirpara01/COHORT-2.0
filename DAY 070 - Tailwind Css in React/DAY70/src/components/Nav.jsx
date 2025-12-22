
const Nav = () => {
    return (
        <div className='Nav w-full bg-[#060503] mb-4 sticky top-0 flex items-center justify-between text-white'>
            <div className="left text-3xl font-[misol]">DVSY</div>
            <div className="right flex items-center justify-between gap-3">
                <h3 className=' bg-[#201E1D] px-4 py-2 font-[misol] text-xl text-center border-0 rounded-sm cursor-pointer'><a href="#">DESIGNERS</a></h3>
                <h3 className=' bg-[#201E1D] px-4 py-2 font-[misol] text-xl border-0 rounded-sm cursor-pointer'><a href="#">COLLABS</a></h3>
                <h3 className=' bg-[#201E1D] px-4 py-2 font-[misol] text-xl border-0 rounded-sm cursor-pointer'><a href="#">EVENTS</a></h3>
                <h3 className=' bg-[#201E1D] px-4 py-2 font-[misol] text-xl border-0 rounded-sm cursor-pointer'><a href="#">BLOG</a></h3>
                <h3 className=' bg-[#201E1D] px-4 py-2 font-[misol] text-xl border-0 rounded-sm cursor-pointer'><a href="#">CARD</a></h3>
                <h3 className=' bg-[#E96F57] px-4 py-2 font-[misol] text-xl border-0 rounded-sm cursor-pointer'><a href="#">GET IN TOUCH</a></h3>
            </div>
        </div>
    )
}

export default Nav  