import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

//Images
import IMG1 from "../../assets/github user preview.png";
import IMG2 from "../../assets/weather-app.png";
import IMG3 from "../../assets/ecommerce-app.png";
import IMG4 from "../../assets/todo.png";

//styles
import "./Portfolio.style.css";

//Data

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Github User",
    github: "https://github.com/LuisLara28/GithubUser",
    demo: "https://loving-fermi-a381cb.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "WeatherApp",
    github: "https://github.com/LuisLara28/WeatherAPP",
    demo: "https://goofy-pare-521b82.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "EcommerceApp",
    github: "https://github.com/LuisLara28/E-commerce",
    demo: "https://silly-poitras-412a6f.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TodoApp",
    github: "https://github.com/LuisLara28/todoList",
    demo: "https://gorgeous-conkies-b1022c.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container mySwipper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
