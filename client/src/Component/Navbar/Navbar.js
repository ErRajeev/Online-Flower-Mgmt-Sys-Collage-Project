import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Image/if-footer-logo.png'
// import { BsFillCartCheckFill } from 'react-icons/bs'
import { ImUser } from 'react-icons/im';
import { MdOutlineSell } from 'react-icons/md'
import { auth, db } from '../../Configuration/Config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const Navbar = () => {

  const GetCurrentUser = () => {
    const [user, setUser] = useState('');
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          // console.log(userlogged.email)
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
            // console.log(q)
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          };
          getUsers();
        }
        else {
          setUser(null);
        }
      })
    }, [])
    return user
  }

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/');
    })
  }

  const loggeduser = GetCurrentUser();
  const navigate = useNavigate();
  const myStyle = { backgroundColor: "#1a1c30" }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-muted-l fixed-top" style={myStyle}>
        <div className="container-fluid">
          <NavLink to={'/'} className="navbar-brand"><img src={logo} className="nav_logo" alt="error"></img> </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/Contact'} className="nav-link" >Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/Team'} className="nav-link" >Our Team</NavLink>
              </li>
            </ul>
          </div>

          {!loggeduser &&
            <nav>
              <form className="d-flex">
                <NavLink to="/login"><button className='btn btn-outline-success'>Login</button></NavLink>
              </form>
            </nav>}

          {loggeduser && loggeduser[0].email === "er.rajeev.mca@gmail.com" &&
            <nav>
              <form className="d-flex">
                <NavLink to={'/admin'} className='nav-link sell-iconn'><MdOutlineSell /></NavLink>
              </form>
            </nav>
          }

          {loggeduser &&
            <nav>
              <form className="d-flex">
                {/* <NavLink to={'/error'} className="nav-link cart-iconn" ><BsFillCartCheckFill />0</NavLink> */}
                <NavLink to={'/profile'} className="nav-link user-iconn"><ImUser /></NavLink>
                <button className='btn btn-outline-success' onClick={handleLogout}>logout</button>
              </form>
            </nav>}
        </div>
      </nav>
    </>
  )
}
export default Navbar;