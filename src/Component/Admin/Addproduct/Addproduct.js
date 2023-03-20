import React, { useState, useEffect } from 'react'
import { storage, auth, db } from '../../../Configuration/Config'
import { collection, getDocs, query, where, doc, updateDoc, addDoc } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import './Addproduct.css'

const Addproduct = () => {
  const [producttitle, setProductTitle] = useState("");
  const [producttype, setProductType] = useState("")
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("")
  const [customersupport, setCustomersupport] = useState("")
  const [price, setPrice] = useState("")
  const [warranty, setWarranty] = useState("")
  const [productimage, setProductImage] = useState()

  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
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

  const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']

  const handleProductImg = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setProductImage(selectedFile);
        setImageError('')
      }
      else {
        setProductImage(null)
        setImageError('Please select a valid Image file type(png or jpg')
      }
    }
    else {
      setImageError('Please select your file')
    }
  }
  const loggeduser = GetCurrentUser();
  // if (loggeduser) { console.log(loggeduser[0].password)}

  const handleAddProduct = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `product-image${producttype.toUpperCase()}/${Date.now()}`)
    //console.log(storageRef._location.path)

    uploadBytes(storageRef, productimage)
      .then(() => {
        setSuccessMsg('Data Upload Successfully')
        getDownloadURL(storageRef).then(url => {
          addDoc(collection(db, `products-${producttype.toUpperCase()}`), {
            producttitle,
            producttype,
            description,
            brand,
            customersupport,
            price,
            warranty,
            productimage: url
          })
        })
      }).catch((error) => {
        // console.log(error.massage)
      })
  }
  return (
    <>
      {loggeduser && loggeduser[0].email === "er.rajeev.mca@gmail.com" ?
        <div className='addprod-container'>
          <form className="addprod-form" onSubmit={handleAddProduct}>
            <p>Add Data</p>
            <label>Product Title</label>
            <input onChange={(e) => setProductTitle(e.target.value)}
              type="text" placeholder="Product Title" required />

            <label>Product Type</label>
            <input onChange={(e) => { setProductType(e.target.value) }}
              type="text" placeholder="Product Type" required />

            <label>Brand</label>
            <input onChange={(e) => { setBrand(e.target.value) }}
              type="text" placeholder="Brand Name" required />

            <label>Warrenty</label>
            <input onChange={(e) => { setWarranty(e.target.value) }}
              type="text" placeholder="Product Warrenty" required />

            <label>Image</label>
            <input onChange={handleProductImg} type="file" required />
            {imageError && <><div className='error-msg'>{imageError}</div></>}

            <label>Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product in breif" required></textarea>

            <label>Price without Tax</label>
            <input onChange={(e) => { setPrice(e.target.value) }}
              type="text" placeholder="Enter Price without tax" required />

            <label>Customer Support</label>
            <input onChange={(e) => { setCustomersupport(e.target.value) }}
              type="text" placeholder="Customer Support Email, Phone or address" required />

            <button type='submit'>Add</button>
            <span className='my-error'>
              {successMsg && <> <div className='success-msg'>{successMsg}</div></>}
              {uploadError && <> <div className='error-msg'>{uploadError}</div></>}
            </span>
          </form>
        </div> :
        <div className='e-msg'>You don't have access to add products</div>
      }
    </>
  )
}
export default Addproduct;