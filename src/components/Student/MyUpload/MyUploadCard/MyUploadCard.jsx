import React from "react";
import { AiFillLike, AiFillDislike,  } from "react-icons/ai";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import classes from "./MyUploadCard.module.css";

const MyUploadCard = () => {
  return (
    <div className={classes.MyUpload__card__container}>
      <div className={classes.MyUpload__card__header}>
        <h3>Maths</h3>
        <p>Unit 1</p>
      </div>
      <div className={classes.MyUpload__card__body}>
        <div className={classes.MyUpload__card__body__item}>
          <p>Approved By -</p>
          <p>Mr. John Doe</p>
        </div>
        <div className={classes.MyUpload__card__body__item}>
          <p>Date -</p>
          <p>12/12/2020</p>
        </div>
        <div className={classes.MyUpload__card__body__item}>
          <p>Credits -</p>
          <p>120</p>
        </div>
      </div>
      <div className={classes.MyUpload__card__footer}>
        <div>
          <AiFillLike className={classes.like__icon} />
          <p>20</p>
        </div>
        <div>
          <AiFillDislike className={classes.dislike__icon} />
          <p>1</p>
        </div>
        <div>
            <BsFillPencilFill className={classes.edit__icon} />
            <div className={classes.line__break}/>
            <BsFillTrashFill className={classes.delete__icon} />
        </div>
      </div>
    </div>
  );
};

export default MyUploadCard;
