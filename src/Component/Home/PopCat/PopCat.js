import React, { useState } from 'react';
import PopCatData from './PopCatData';
import './PopCat.css';

const PopCat = () => {
    const [popdata, setPopdata] = useState(PopCatData)
    return (
        <>
            <div className='container-main'>
                <h1 className='pop-heading'>Popular Category</h1>
                <hr />
                <div className=' d-flex container-sub'>
                    {
                        popdata.map((data) => {
                            return (
                                <>
                                    <div className='container-content' >
                                        <div className='container-imgg' >
                                            <a href={data.link}> <img src={data.img} alt='error' /></a>
                                        </div>
                                        <div className='popcat-about'>
                                            {data.about}
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default PopCat;
