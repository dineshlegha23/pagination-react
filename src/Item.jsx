import React from "react";

const Item = ({ thumbnail, price, title, id }) => {
  return (
    <div className="p-6 border-[1px] border-black">
      <img className="w-[150px] h-[100px]" src={thumbnail} alt={title} />
      <p>ID:{id}</p>
      <h3>
        {title.slice(0, 15)}
        {title.length > 15 && "..."}
      </h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Item;
