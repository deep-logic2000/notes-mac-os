import React from "react";
import "./ListItem.scss";

const ListItem = props => {
  const { id, title, text, activeItem, setActiveItem, changeCurrentNote } =
    props;
  // console.log(title);
  const handleClick = () => {
    setActiveItem(id);
  };
  return (
    <li
      onClick={() => {
        handleClick(); changeCurrentNote(text);
      }}
      className={activeItem === id ? "active" : ""}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
