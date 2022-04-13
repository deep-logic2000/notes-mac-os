import React from "react";
import "./ListItem.scss";

const ListItem = props => {
  const { id, title, text, activeItem, setActiveItem, changeCurrentNote, changeCurrentId, changeCurrentNoteTitle, key } =
    props;
  // console.log(title);
  const handleClick = () => {
    setActiveItem(id);
  };
  return (
    <li
    id={id} key={key}
      onClick={() => {
        handleClick(); changeCurrentNote(text); changeCurrentId(id)
      }}
      className={activeItem === id ? "active liWrapper" : "liWrapper"}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
