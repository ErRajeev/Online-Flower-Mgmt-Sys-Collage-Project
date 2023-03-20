import React from 'react'
import MainCarousel from './MainCarousel/MainCarousel'
import PopCat from './PopCat/PopCat'
import Footer from '../Footer/footer'
import ProductSlider from '../Admin/ProductSlider/ProductSlider';
import GiftIdea from './GiftIdea/GiftIdea'
const Home = () => {
  return (
    <>
      <MainCarousel />
      <PopCat />
      <ProductSlider type={'Flowers-in-a-box'} />
      <ProductSlider type={'Luxury-Collection'} />
      <ProductSlider type={'Flowers-in-a-vase'} />
      <ProductSlider type={'Plant-Gifts'} />
      <ProductSlider type={'Hand-tied-Bouquet'} />
      <GiftIdea />
      <Footer />
    </>
  )
}
export default Home;