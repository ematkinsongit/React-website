import './register.css';


function Register() {
    return (
        <div className="register">
           <h1 className="registerTitle">Register</h1>
            <form className="registerForm"> 
            <label>Username</label>
           <input type="text" placeholder='Enter a Username' className="registerUsername" />
<label>Email</label>
<input type="text" className="registerEmail" placeholder='Enter your Email'/>
<label>Password</label>
<input type="text" className='registerPassword' placeholder='Choose your Password'/>

<button className='registerButton'>Register</button>
            </form>
            <button className="registerLoginButton"><a href='/login'>Login</a></button>
        </div>
       
    );
}

export default Register
