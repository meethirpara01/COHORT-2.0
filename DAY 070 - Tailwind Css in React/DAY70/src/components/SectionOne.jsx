
const SectionOne = () => {
    return (
        <div className=" w-full h-[85vh] bg-[url(./assets/bg1Y.png)] rounded-md relative font-[misol]">
            <div className="textContent text-white">
                <h1 className=" absolute top-65 left-50 text-9xl">DESIGN</h1>
                <h1 className=" absolute top-90 left-80 text-9xl">& FREEDOM</h1>
                <div className=" w-[70%] absolute top-120 left-83 flex justify-between">
                    <p className=" text-2xl leading-none">Explore Independent Style by Embracing Uniqueness <br />with Our Exclusive Designer Apparel</p>
                    <button className=" text-2xl cursor-pointer"><i className="ri-arrow-down-line bg-[rgb(255,255,255)]/[.20] backdrop-blur-xs p-2 border-[0.5px] rounded-4xl mr-2"></i> LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default SectionOne