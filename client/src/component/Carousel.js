import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner custom-carousel">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?w=2000&t=st=1687887547~exp=1687888147~hmac=e00f5ea8fbe620b86c03c462c74ee27cd97e520ae462d34bad88167acf128161&w=1380"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-block w-100 h-100"></div>
          </div>
          <div className="carousel-item custom-carousel">
            <img
              src="https://img.freepik.com/free-photo/middle-eastern-arabic-dish-ai-generated-image_511042-1776.jpg?w=2000&t=st=1687888160~exp=1687888760~hmac=6672a562affe5c272661c2f7ad70491ff4824be684912681f8bd12d7f7001735&w=1480"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-block w-100 h-100"></div>
          </div>
          <div className="carousel-item custom-carousel">
            <img
              src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1380&t=st=1687888186~exp=1687888786~hmac=73822c5c75dfe1e7ec186d1e4432b17c3fcc89af9dd8368616c105090112fcec"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-blockw-100 h-100"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
