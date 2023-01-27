import React from "react";

const Item = ({ url, title, author, num_comments, points }) => {
  return (
    <li>
      <span>
        <a href={url}>{title}</a>,&nbsp;
      </span>
      <span>{author},&nbsp;</span>
      <span>comments: {num_comments},&nbsp;</span>
      <span>points: {points}</span>
    </li>
  );
};

export default Item;
