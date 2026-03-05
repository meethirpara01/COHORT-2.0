import { useNavigate } from "react-router"
import "../nav.scss"

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className='nav-bar'>
        <p>INSTA</p>
        <button onClick={() => {navigate("/create-post")}} className='button primary-button'>New Post</button>
    </div>
  )
}

export default Nav