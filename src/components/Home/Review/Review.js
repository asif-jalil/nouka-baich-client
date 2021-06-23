import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setLoader(true);
    fetch("https://salty-journey-40699.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoader(false);
      });
  }, []);

  return (
    <section className="review">
      <Container>
        <div className="section-title">
          <h3>People say about us</h3>
        </div>
        {loader ? (
          <Spinner animation="border"></Spinner>
        ) : (
          <Slider {...settings}>
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </Slider>
        )}
      </Container>
    </section>
  );
};

export default Review;
