import React from 'react'
import './SliderProductCard.css'
const SliderProductCard = (product) => {
    let p = product.product

    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;
    let mrp = parseInt(p.price);
    mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp

    return (
        <>
            <div className='mini-product-container'>
                <div className='mini-img-container'>
                    <img src={p.productimage} alt='' />
                </div>
                <div className='mini-product-details'>
                    <p className='mini-producttitle'>{p.producttytle}</p>
                </div>

                <div className='mini-price-container'>
                    <p className='mrp'>MRP: <p className='rate'>₹  {parseInt(mrp)}</p></p>
                    <p className='saleprice'>Discount Price: <p className='rate'>₹ {parseInt(saleprice)}</p></p>
                    <p className='yousave'>You Save: ₹ {parseInt(mrp - saleprice)}</p>
                </div>
                <div className='buy-cart'>
                    <a href={`/product/${p.producttype}/${p.id}`}>
                        <button className='btn btn-danger'>Buy Now</button>
                        <button className='btn btn-warning'>Add to Cart</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default SliderProductCard;