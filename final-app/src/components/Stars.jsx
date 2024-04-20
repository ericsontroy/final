import React, { useState } from "react";

const Stars = (cookies) => {
  const [stars, setStars] = useState([0]);
  const [hover, setHover] = useState([0]);

  console.log(stars);

  return (
    <div>
      {[...Array(5)].map((stars, index) => {
        index += 1;
        return (
          <button
            type="button"
            id="starBtn"
            key={index}
            onClick={() => setStars(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(stars)}
          >
            {/* <span>&#9733;</span> */}
            {index <= stars || index <= hover ? "★" : "☆"}
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
