import React from "react";
import "./ListItem.scss";

const ListItem = props => {
  const { id, title, text, activeItem, setActiveItem, changeCurrentNote, changeCurrentId, changeCurrentNoteTitle } =
    props;
  // console.log(title);
  const handleClick = () => {
    setActiveItem(id);
  };
  console.log(id);
  return (
    <li
    id={id} key={id}
      onClick={() => {
        handleClick(); changeCurrentNote(text); changeCurrentId(id)
      }}
      className={activeItem === id ? "active liWrapper" : "liWrapper"}
    >
      <h2 className="titleOfSidebarElement">{title}</h2>
      <p className="textOfSidebarElement">{text}</p>
    </li>
  );
};

export default ListItem;
