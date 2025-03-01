import React from "react";

export default function Slider2() {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="sl1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="sl2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="sl3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
