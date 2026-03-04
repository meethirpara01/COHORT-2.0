import { useState } from "react";
import { Link } from "react-router"

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handelSubmit(e) {
        e.preventDefault();

        
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handelSubmit}>
                    <input onInput={(e) => { setUsername(e.target.value) }} value={username} type="text" name='username' placeholder='Enter Username' />
                    <input onInput={(e) => { setEmail(e.target.value) }} value={email} type="text" name='email' placeholder='Enter Email' />
                    <input onInput={(e) => { setPassword(e.target.value) }} value={password} type="password" name='password' placeholder='Enter Password' />
                    <button className="button primary-button" type='submit'>Register</button>
                </form>
                <p>Already Have An Account? <Link className="toggleAuthForm" to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default Register