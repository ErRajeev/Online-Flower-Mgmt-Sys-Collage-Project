import React from "react";
import './MainCarousel.css'
import img1 from "../../../Image/4.png"
import img2 from "../../../Image/3.png"
import img3 from "../../../Image/2.png"
import img4 from "../../../Image/1.png"

const MainCarousel = () => {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item car-block active">
                        <img src={img1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item car-block">
                        <img src={img2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item car-block">
                        <img src={img3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item car-block">
                        <img src={img4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default MainCarousel;