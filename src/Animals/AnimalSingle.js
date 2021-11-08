import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  let history = useHistory();

  return (
    <div className="singleInfo">
      <div className="singleAnimal">
        <h2 className="oneAnimalInfo" style={{ marginLeft: "10%" }}>
          This is the page for {animal}
        </h2>
        <img
          src={`https://source.unsplash.com/1600x900/?${animal}`}
          alt="animal_picture"
          style={{
            width: "600px",
            height: "400px",
            marginTop: "2rem",
            marginLeft: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      <div>
        <button onClick={() => history.goBack()}>Back to animals</button>
      </div>
    </div>
  );
};

export default AnimalSingle;
