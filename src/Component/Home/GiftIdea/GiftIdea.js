import React from "react";
import './GiftIdea.css'
import img1 from '../../../Image/birthday_17.jpg'
import img2 from '../../../Image/anniversary_13.jpg'
import img3 from '../../../Image/for_her_1.jpg'
import img4 from '../../../Image/for_him_4.jpg'
const GiftIdea2 = () => {
  return (
    <>
      <div className="gft-main">

        <div class="header">
          <h1>Reliable, efficient delivery</h1>
          <h1>Powered by Technology</h1>

          <p>Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful</p>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img src={img1} alt='error' />
          </div>

          <div class="box red">
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={img2} alt='error' />
          </div>

          <div class="box box-down blue">
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img src={img3} alt='error' />
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={img4} alt='error' />
          </div>
        </div>
      </div>
    </>
  )
}
export default GiftIdea2;