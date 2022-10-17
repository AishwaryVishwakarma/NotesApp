import React from "react";
import Tilt from "react-parallax-tilt";
import {
  AiFillLike,
  AiFillDislike,
  AiFillHeart,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineHeart,
  AiFillFilePdf,
} from "react-icons/ai";
import classes from "./Card.module.css";

const Card = (props) => {
  /*State to manage like, dislike and heart*/
  const [interaction, setInteraction] = React.useState({
    like: false,
    dislike: false,
    heart: false,
    likesCount: Number(props.likes),
    dislikesCount: Number(props.dislikes),
  });

  /*Like, Dislike and Heart click handler*/
  const handleInteraction = (interaction) => {
    if (interaction === "like") {
      setInteraction((prev) => {
        return {
          ...prev,
          like: !prev.like,
          dislike: false,
          likesCount: prev.like ? prev.likesCount - 1 : prev.likesCount + 1,
          dislikesCount: prev.dislike
            ? prev.dislikesCount - 1
            : prev.dislikesCount,
        };
      });
    } else if (interaction === "dislike") {
      setInteraction((prev) => {
        return {
          ...prev,
          like: false,
          dislike: !prev.dislike,
          likesCount: prev.like ? prev.likesCount - 1 : prev.likesCount,
          dislikesCount: prev.dislike
            ? prev.dislikesCount - 1
            : prev.dislikesCount + 1,
        };
      });
    } else if (interaction === "heart") {
      setInteraction((prev) => {
        return {
          ...prev,
          heart: !prev.heart,
        };
      });
    } else {
      return;
    }
  };

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      style={{ height: "max-content", width: "max-content" }}
    >
      <div className={classes.card__container}>
        <div className={classes.card__header}>
          <h3>{props.subject}</h3>
          <p>Unit {props.unit}</p>
          <div className={classes.document__type}>
            <AiFillFilePdf />
          </div>
        </div>
        <div className={classes.card__body}>
          <div>
            <h4>Submitted By -</h4>
            <p>{props.submittedBy}</p>
          </div>
          <div>
            <h4>Approved By -</h4>
            <p>{props.approvedBy}</p>
          </div>
          <div>
            <h4>Date -</h4>
            <p>{props.date}</p>
          </div>
          
        </div>
        <div className={classes.card__footer}>
          <div
            className={classes.card__footer__item}
            onClick={() => handleInteraction("like")}
          >
            {interaction.like ? (
              <AiFillLike className={classes.like__icon} />
            ) : (
              <AiOutlineLike className={classes.like__icon} />
            )}
            <p>{interaction.likesCount}</p>
          </div>
          <div className={classes.line__break}></div>
          <div
            className={classes.card__footer__item}
            onClick={() => handleInteraction("dislike")}
          >
            {interaction.dislike ? (
              <AiFillDislike className={classes.dislike__icon} />
            ) : (
              <AiOutlineDislike className={classes.dislike__icon} />
            )}
            <p>{interaction.dislikesCount}</p>
          </div>
          {interaction.heart ? (
            <AiFillHeart
              className={classes.heart__icon}
              onClick={() => handleInteraction("heart")}
            />
          ) : (
            <AiOutlineHeart
              className={classes.heart__icon}
              onClick={() => handleInteraction("heart")}
            />
          )}
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
