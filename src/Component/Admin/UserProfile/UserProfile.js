import React, { useState, useEffect } from 'react'
import { auth, db } from '../../../Configuration/Config'
import { collection, getDocs, query, where, async } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import Footer from '../../Footer/footer'
import './UserProfile.css'
const UserProfile = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState('')
        const usersCollectionRef = collection(db, "users")

        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
                        // console.log(q)
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    }
                    getUsers();
                }
                else {
                    setUser(null)
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();

    return (
        <>
            <div className='user-profile'>
                <div className=" container user-container">
                    {loggeduser ?
                        <div className='container  user_div'>
                            <div className='user-heading'>
                                <h1><u>Your Account Details</u></h1>
                                {/* <hr className='hrd'></hr> */}
                            </div>

                            {/* <div className='user-detail d-flex user-detail-fild'> */}
                            <p> <span>Your Name :  </span>
                                {loggeduser ? loggeduser[0].username : ""}</p>
                            {/* </div> */}
                            {/* <div className='user-detail d-flex user-detail-fild'> */}
                            <p> <span>Your Email : </span>
                                {loggeduser ? loggeduser[0].email : ""}</p>
                            {/* </div> */}
                            {/* <div className='user-detail d-flex user-detail-fild'> */}
                            <p> <span>Your Number :    </span>
                                {loggeduser ? loggeduser[0].numbar : ""}</p>
                            {/* </div> */}
                            {/* <div className='user-detail d-flex user-detail-fild'> */}
                            <p><span>Yor Address : </span>
                                {loggeduser ? loggeduser[0].address : ""}</p>
                            {/* </div> */}
                            
                        </div> :
                        <div>
                            <h1> Your Are Not Login</h1>
                        </div>}
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default UserProfile;