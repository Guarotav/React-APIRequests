import React from "react";

const GifCard = (props) => {
  const gif = props.gif;


  return (

    <div className="gif-card">

      <img
        src={gif.images.fixed_height.url}
      />
    </div>
  );
};

export default GifCard;
