import React, { useState } from 'react'
import './PaymentForm.css'
import img from '../../Image/pay.jpg'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../Configuration/Config'
import Footer from '../Footer/footer';
import { HiCurrencyRupee } from 'react-icons/hi';

const PaymentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');

    const userCollectionRef = collection(db, 'order')
    const handleSubmit = (e) => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            number: number,
            pincode: pincode,
            city:city,
            area: area,
        }).then(() => {
            if (!alert("Thanka You for Shoping...!!")) document.location = "http://localhost:3000/"
        }).catch((error) => {
            alert(error.massage)
        })
    }
    return (
        <>
            <div className="pay-main">
                <div className="pay-pic">
                    <img src={img} alt="Founder" />
                </div>
                <div>
                    <h2 className="pay-us"><HiCurrencyRupee /> Pay Now</h2>
                </div>

                <div className="pay-details">
                    <form >
                        <div>
                            <input className="pay-input" type="text"
                                placeholder="Full Name" required
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <input className="pay-input" type="email"
                                placeholder="&#9993;&nbsp;Your Email" required
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </div>
                        <div>

                            <input className="pay-input" type="number"
                                placeholder="&#9990;&nbsp;Your Mobile Number" required
                                onChange={(event) => {
                                    setNumber(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <input className="pay-input" type="number"
                                placeholder="Pincode" required
                                onChange={(event) => {
                                    setPincode(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <input className="pay-input" type="text"
                                placeholder="Town/City" required
                                onChange={(event) => {
                                    setCity(event.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <textarea className="pay-input" cols="35" rows="05"
                                placeholder="Area, Street, Flat, House no." required
                                onChange={(event) => {
                                    setArea(event.target.value)
                                }}
                            />
                        </div>

                    </form>
                </div>
                <div className='pay-btns'>
                    <strong>&#9757;Read Carefully:</strong>&nbsp;
                    <button onClick={handleSubmit} className="btn btn-success pay-submit-btn">Submit</button>
                    <button className="btn btn-warning pay-reset-btn">Reset</button>
                </div>

            </div>
            < Footer />
        </>
    )
}
export default PaymentForm;