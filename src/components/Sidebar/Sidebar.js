import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actionCreators/noteAC";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Sidebar.module.scss";

const Sidebar = props => {
  const { changeCurrentNote, changeCurrentId, changeCurrentNoteTitle } = props;
  const notes = useSelector(({ notes }) => notes.notes);
  const [activeItem, setActiveItem] = useState(null);
  //   console.log(notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
 

  console.log("notes", notes);

  if (!notes)
    return <p style={{ fontSize: 24 }}>You don't have any notes yet</p>;
  // if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <div className={styles.sidebarWrapper}>
        <SearchBox />
        <AddNoteButton />
        <ul>
          {notes &&
            notes.map(({ id, noteTitle, noteText }) => (
              <ListItem
                id={id}
                title={noteTitle}
                text={noteText}
                key={id}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                changeCurrentNote={changeCurrentNote}
                changeCurrentId={changeCurrentId}
                changeCurrentNoteTitle={changeCurrentNoteTitle}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.array,
};
Sidebar.defaultProps = {
  notes: null,
};

export default Sidebar;
