import React from "react";
import classes from "./Review.module.css";
import DATA from "../../../../DATA/Approve-ReviewData";
import ReviewCard from "./ReviewCard/ReviewCard";

const Review = () => {
  return (
    <div className={classes.review__container}>
      {DATA.map((data) => (
        <ReviewCard
          key={data.id}
          subject={data.subject}
          unit={data.unit}
          submittedBy={data.submittedBy}
          date={data.date}
          likes={data.likes}
          dislikes={data.dislikes}
        />
      ))}
    </div>
  );
};

export default Review;
