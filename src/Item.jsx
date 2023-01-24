import React from "react";

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>,&nbsp;
    </span>
    <span>{item.author},&nbsp;</span>
    <span>comments: {item.num_comments},&nbsp;</span>
    <span>points: {item.points}</span>
  </li>
);

export default Item;
