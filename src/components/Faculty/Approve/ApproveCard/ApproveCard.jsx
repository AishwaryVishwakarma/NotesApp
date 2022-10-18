import React from "react";
import classes from "./ApproveCard.module.css";

const ApproveCard = (props) => {
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
      <div className={classes.button__section}>
        <button className={classes.approve__button}>Approve</button>
        <button className={classes.decline__button}>Decline</button>
      </div>
    </div>
  );
};

export default ApproveCard;
