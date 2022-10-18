import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import classes from "./ReviewCard.module.css";

const ReviewCard = (props) => {
  return (
    <div className={classes.card__container}>
      <div className={classes.card__title}>
        <h3>{props.subject}</h3>
        <p>Unit {props.unit}</p>
      </div>
      <div className={classes.line__break} />
      <div className={classes.details}>
        <p>
          Submitted By - <span>{props.submittedBy}</span>
        </p>
        <p>
          Date - <span>{props.date}</span>
        </p>
      </div>
      <div className={classes.line__break} />
      <div className={classes.likes__section}>
        <div className={classes.likes}>
          <AiFillLike className={classes.like__icon}/>
          <p>{props.likes}</p>
        </div>
        <div className={classes.dislikes}>
          <AiFillDislike className={classes.dislike__icon}/>
          <p>{props.dislikes}</p>
        </div>
      </div>
      <div className={classes.button__section}>
        <button className={classes.approve__button}>Allow</button>
        <button className={classes.decline__button}>Decline</button>
      </div>
    </div>
  );
};

export default ReviewCard;
