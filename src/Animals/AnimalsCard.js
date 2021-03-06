import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "../Animals/AnimalsCard.css";

const AnimalsCard = (props) => {
  const match = useRouteMatch();

  return (
    <div className="card">
      <img src={`https://source.unsplash.com/1600x900/?${props.name} alt=''`} />
      <h2>{props.name}</h2>
      <Link className="read_more" to={`${match.url}/${props.name}`}>
        Read more
      </Link>
    </div>
  );
};

export default AnimalsCard;
