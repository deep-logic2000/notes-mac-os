import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
// import { fetchDataFromLS } from "../../store/actionCreators/noteAC";
import { fetchData, addNote } from "../../store/actionCreators/noteAC";
import { FETCH_DATA } from "../../store/actions/notesAction";
import "./Sidebar.scss";

const Sidebar = () => {
  const notes = useSelector(({ notes }) => notes.notes);
  const isLoading = useSelector(({ notes }) => notes.isLoading);
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
      <div>
        <button className="btnAddNote" onClick={() => dispatch(addNote())}>
          Add Note
        </button>
        <ul>
          {notes &&
            notes.map(({id, noteTitle, noteText}) => (
              <ListItem id={id} title={noteTitle} text={noteText} key={id} />
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
