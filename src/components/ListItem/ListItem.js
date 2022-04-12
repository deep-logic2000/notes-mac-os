import React from "react";

const ListItem = (props) => {
  const {id, title, text} = props
  // console.log(title);
  return (
  <li>
    <h2>{title}</h2>
    <p>{text}</p>
    </li>
  // <p>{noteText}</p>
  )
};

export default ListItem;
