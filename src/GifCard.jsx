import React from "react";

const GifCard = (props) => {
  const gif = props.gif;


  return (

    <div className="gif-card" style = {cardStyle}>

      <img
        src={gif.images.fixed_height.url}
      />
    </div>
  );
};

export default GifCard;
