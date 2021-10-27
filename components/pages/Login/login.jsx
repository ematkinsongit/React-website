import './login.css';


function Login() {
    return (
       <div className="login">
          <span className="loginTitle">Login</span>
       
       <form className="loginForm">
<label >Email</label>
<input type="text" className="loginEmail" placeholder='yourName@email.com'/>
<label >Password</label>
<input type="password" className="loginPassword" placeholder='Password123'/>
<button className="loginButton">Login</button>


       </form>
       <button className="loginRegisterButton"><a href='/register'>Register</a></button>
       </div>
    );
}

export default Login
 