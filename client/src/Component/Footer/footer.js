import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
              <i>Do you want to order fresh flowers delivery in bloom room? </i>
              <br/>
              Bloom room will help to make a
                memorable surprise for important people and create a festive atmosphere:
                {/* <details/> */}
                 we offer exclusive
                bouquets for any occasion.We deliver designer bouquets of flowers in Bloom Room ! Choose a
                convenient form of payment (cash and bank transfer) and order courier delivery of flowers. If
                you need help in choosing bouquets of flowers
                 {/* – our experienced florists will help you choose
                and compose a bouquet that will remain in your heart for a long time!
                Our motto is perfectly fresh flowers, impeccable workmanship and first-class service. */}
                </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="3">Home</a></li>
                <li><a href="/error">####</a></li>
                <li><a href="/error">#####</a></li>
                <li><a href="/error">####</a></li>
                <li><a href="/error">######</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="/team">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/error">Contribute</a></li>
                <li><a href="/error">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                <span> Rajeev Ranjan</span>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href='https://www.facebook.com/thee.rajeev/'><AiFillFacebook /></a></li>
                <li><a className="twitter" href="https://twitter.com/home"> <AiFillTwitterCircle /></a></li>
                <li><a className="dribbble" href="https://www.instagram.com/errajeev_ranjan/"><BsInstagram /></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/rajeev-ranjan-09790622b/"> <FaLinkedinIn /></a></li>
                <li><a className="linkedin" href="/" > <BiHomeCircle /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
