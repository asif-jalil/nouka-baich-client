import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import "./Review.css";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch("https://salty-journey-40699.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoader(false);
        console.log(data);
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
          <Row>
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Review;
