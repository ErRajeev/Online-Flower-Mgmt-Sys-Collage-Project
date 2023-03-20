import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ProductPage.css"
import { useParams } from "react-router-dom"
import { db, auth } from "../../../Configuration/Config"
import { doc, getDoc, collection, query, getDocs, where, addDoc } from "firebase/firestore"
import ProductSlider from "../ProductSlider/ProductSlider"
import Footer from "../../Footer/footer"

const ProductPage = () => {
    const { type, id } = useParams();
    const [product, setProduct] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const navigate = useNavigate();

    function GetCurrentUser() {
        const [user, setUser] = useState("");
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
    const loggeduser = GetCurrentUser();

    function GetCurrentProduct() {
        useEffect(() => {
            const getProduct = async () => {
                const docRef = doc(db, `products-${type.toUpperCase()}`, id);
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProduct();
        }, [])
        return product;
    }
    GetCurrentProduct();



    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;
    let mrp = parseInt(product.price);

    mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp


    const addtocart = () => {
        if (loggeduser) {
            addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
                product, quantity: 1
            }).then(() => {
                navigate('/pay')
                // setSuccessMsg("Product Added to cart");
            }).catch(() => {
                seterrorMsg('errorMsg')
            })
        }
        else {
            seterrorMsg("You need to login")
        }
    }

    return (
        <>
            <div className="Prod-Page-Main container">
                {product ? <div className="Prod-Container">
                    <div className="Prod-img-cont">
                        <img src={product.productimage} alt='' />
                    </div>
                    <div className="prod-data">
                        <p className="prod-head">{product.producttitle}</p>
                    </div>
                    <div className="specific-price-container">
                        <p className='prod-saleprice'>Discount Price: <p className='prod-rate'>₹ {parseInt(saleprice)}</p></p>
                        <p className='prod-yoursave'>You Save: ₹ {parseInt(mrp - saleprice)}</p>
                    </div>
                    <p className="prod-details-head">Details</p>
                    <p className="prod-description">{product.description}</p>

                    <div className="row-cont">
                        <div className="wr">
                            <div className="cod">
                                <div className="img-circle">
                                    <img src="" alt="" />
                                </div>
                                <p>Cash On Delivery</p>
                            </div>
                        </div>
                        <div className='buy-cart'>
                            <div>
                                <button className='btn btn-success' onClick={addtocart}>Buy Now</button>
                                {/* <button className='btn btn-warning' onClick={addtocart}>Add to Cart</button> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='my-error'>
                            {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
                            {successMsg && <><div className='success-msg'>{successMsg}</div> </>}
                        </span>
                    </div>
                </div> : <div>Loading....</div>
                }
            </div>
            <div className="prod-details-head2">
                <span >You May Like</span>
            </div>
            <div>
                <ProductSlider type={type} />
            </div>
            <Footer />
        </>
    )
}
export default ProductPage