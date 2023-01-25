import React from "react";
import Item from "./Item";

const List = ({ list }) => {
  console.log("List renders");
  
  return (
    <ul>
      {list.map((item) => (
        <Item item={item} key={item.objectID} />
      ))}
    </ul>
  );
};

export default List;
