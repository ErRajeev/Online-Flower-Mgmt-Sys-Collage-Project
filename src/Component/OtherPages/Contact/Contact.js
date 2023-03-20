import React, { useState } from 'react'
import './Contact.css'
import img from '../../../Image/if-footer-logo.png'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../Configuration/Config';
import Footer from '../../Footer/footer'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [feedback, setFeedback] = useState("");


    const userCollectionRef = collection(db, 'contactdata')
    const handleSubmit = (e) => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            number: number,
            feedback: feedback
        })
            .then(() => {
                if (!alert("Submit Successfully...!!")) document.location = "http://localhost:3000/"
            }).catch((error) => {
                alert(error.massage)
            })
    }
    return (
        <>
            <div className="main-contact">
                <div className="founder-pic">
                    <img src={img} alt="Founder" />
                </div>
                <div>
                    <h2 className="contact-us">&#9743;&nbsp;Contact Us</h2>
                </div>

                <div className="contact-details">
                    <form >
                        <div>
                            <label for="contact-name"></label>
                            <input className="contact-input" type="text"
                                placeholder="Enter Your Name" required
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />

                        </div>
                        <div>
                            <label for="co-email"></label>
                            <input className="contact-input" type="email"
                                placeholder="&#9993;&nbsp;Enter Your Email" required
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label for="contact-number"></label>
                            <input className="contact-input" type="number"
                                placeholder="&#9990;&nbsp;Enter Mobile Number" required
                                onChange={(event) => {
                                    setNumber(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label for="contact-txt"></label>
                            <textarea className="contact-input" cols="35" rows="05"
                                placeholder="Customize Your Product or Write Your Feedback..!!!" required
                                onChange={(event) => {
                                    setFeedback(event.target.value)
                                }}
                            />
                        </div>

                    </form>
                </div>
                <div className='contact-btns'>
                    <strong>&#9757;Read Carefully:</strong>&nbsp;
                    <button onClick={handleSubmit} className="btn btn-success contact-submit-btn">Submit</button>
                    <button className="btn btn-warning contact-reset-btn">Reset</button>
                </div>

            </div>
            < Footer />
        </>
    )
}
export default Contact;