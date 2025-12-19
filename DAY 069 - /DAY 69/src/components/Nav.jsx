const Nav = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <h1>Horizon Courts</h1>
            </div>
            <div className="center">
                <h3><a href="#">About Us</a></h3>
                <h3><a href="#">Services</a></h3>
                <h3><a href="#">Coaches</a></h3>
                <h3><a href="#">Events</a></h3>
                <h3><a href="#">Contacts</a></h3>
            </div>
            <div className="right">
                <button>Book now<i class="ri-arrow-right-up-long-line"></i></button>
            </div>
        </div>
    )
}

export default Nav