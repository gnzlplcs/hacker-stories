import React from "react";

const Item = ({ item, onRemoveItem}) => {
  const handleRemoveItem = () => {
    onRemoveItem(item)
  }

  return (
    <li>
      <span>
        <a href={item.url} target="_blank">{item.title}</a>,&nbsp;
      </span>
      <span>{item.author},&nbsp;</span>
      <span>comments: {item.num_comments},&nbsp;</span>
      <span>points: {item.points}</span>&nbsp;
      <span>
      {/* another option onClick={() => onRemoveItem(item)} */}
        <button type="button" onClick={handleRemoveItem}>Dismiss</button>
      </span>
    </li>
  );
};

export default Item;
