import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../Configuration/Config'
import Footer from '../../Footer/footer'

const SignUp = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumbar] = useState("");
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const auth = getAuth();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                addDoc(collection(db, "users"), {
                    username: username, email: email,
                    numbar: number, address: address,
                    password: password, uid: user.uid
                }).then(() => {
                    setSuccessMsg("User added Successfully")
                    setUserName('')
                    setEmail('')
                    setNumbar('')
                    setAddress('')
                    setPassword('')
                    setTimeout(() => {
                        setSuccessMsg('');
                        navigate('/');
                    }, 3000);
                })
            }).catch((error) => {
                if (error.message === 'Firebase: Error (auth/invalid-emai).') {
                    setErrorMsg('User already exists');
                }
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setErrorMsg('User already exists');
                }
                if (error.message === 'Firebase: Error (auth/invalid-uid).') {
                    setErrorMsg('uid must be a non-empty');
                }
                if (error.message === 'Firebase: Error (auth/invalid-display-name).') {
                    setErrorMsg('User Name Error');
                }
                if (error.message === 'Firebase: Error (auth/invalid-password).') {
                    setErrorMsg('invalid-password');
                }
                if (error.message === 'Firebase: Error (auth/invalid-password-hash).') {
                    setErrorMsg('The password hash must be a valid');
                }
                if (error.message === 'Firebase: Error (auth/invalid-password-salt).') {
                    setErrorMsg('The password salt must be a valid byte buffer');
                }

            })
    }

    return (
        <>
            <div className="mainBox">
                <div className="booxx">
                    <form autoComplete='off' className='myform'>
                        <span className="logo"><u>WeLcOmE</u></span>
                        <h2>Sign Up</h2>
                        <div className="inputBoxx">
                            <input onChange={(e) => setUserName(e.target.value)} type="text" required />
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div className="inputBoxx">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" required />
                            <span>Email id</span>
                            <i></i>
                        </div>
                        <div className="inputBoxx">
                            <input onChange={(e) => setNumbar(e.target.value)} type="numbar" required />
                            <span>Mobile Number</span>
                            <i></i>
                        </div>
                        <div className="inputBoxx">
                            <input onChange={(e) => setAddress(e.target.value)} type="text" required />
                            <span>Address</span>
                            <i></i>
                        </div>
                        <div className="inputBoxx">
                            <input onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <span></span>
                            <Link to="/login">You have an Account..??? Login</Link>
                        </div>

                        <button onClick={handleSubmit} type='submit' className='logbtn'>Create</button>
                        <span className='my-error'>
                            {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
                            {successMsg && <> <div className='success-msg'>{successMsg}</div> </>}
                        </span>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SignUp;