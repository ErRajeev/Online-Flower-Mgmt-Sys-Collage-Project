import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Footer from '../../Footer/footer'

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg('Logged in Successfully')
        //console.log(loggeduser.email)
        setEmail('')
        setPassword('')
        setErrorMsg('')
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }).catch((error) => {
        // const errorCode = error.code;
        // console.log(error.message)
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMsg('Please fill out all required fields.')
        }
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          setErrorMsg('Email Not Found');
        }
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          setErrorMsg('Wrong Password');
        }
        if (error.massage === 'Firebase: Error (auth/invalid-password).') {
          setErrorMsg('Invalid Password')
        }
      });
  }

  return (
    <>
      <div className="mainBox">
        <div className="boxx">
          <form autoComplete='off' className='myform'>
            <span className="logo"><u>WeLcOmE</u></span>
            <h2>Sign in</h2>

            <div className="inputBoxx">
              <input onChange={(e) => setEmail(e.target.value)} type="email" required />
              <span>Email id</span>
              <i></i>
            </div>
            <div className="inputBoxx">
              <input onChange={(e) => setPassword(e.target.value)} type="password" required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href='/'>Forget Password ?</a>
              <a href='/SignUp'>You haven't Account..? Register</a>
            </div>
            <button onClick={handleLogin} className='logbtn'>Login</button>
            <br />
            <span className='my-error'>
              {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
              {successMsg && <><div className='success-msg'>{successMsg}</div> </>}
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Login;