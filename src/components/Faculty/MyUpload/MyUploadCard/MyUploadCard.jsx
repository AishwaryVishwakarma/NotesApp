import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import classes from "./MyUploadCard.module.css";

const MyUploadCard = (props) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      style={{ height: "max-content", width: "max-content" }}
    >
      <div className={classes.MyUpload__card__container}>
        <div className={classes.MyUpload__card__header}>
          <h3>{props.subject}</h3>
          <p>Unit {props.unit}</p>
        </div>
        <div className={classes.MyUpload__card__body}>
          <div className={classes.MyUpload__card__body__item}>
            <p>Date -</p>
            <p>{props.date}</p>
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
            <div className={classes.line__break} />
            <BsFillTrashFill className={classes.delete__icon} />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default MyUploadCard;
