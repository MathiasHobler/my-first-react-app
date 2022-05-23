import React from "react";
import "./card.css";

const Card = ({ name, imgURL, isBookmarked }) => {
  return (
    <section className="card">
      <img className="card__image" src={imgURL} alt="" />
      <svg className="card__bookmark" viewBox="0 0 24 24">
        <path
          className={isBookmarked ? "" : "card__bookmark--filled"}
          d="M19,20.6l-7-2.6l-7,2.6L5,4c0-0.5,0.4-1,1-1h12c0.6,0,1,0.4,1,1V20.6z"
        ></path>
        <path d="M4,22L4,4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v18l-8-3L4,22z M12,16.9l6,2.3V4H6l0,15.1L12,16.9z"></path>
      </svg>
      <p>{name}</p>
      <button className="card__btn">Show details</button>
    </section>
  );
};

export { Card };
