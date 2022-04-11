import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromLS } from "../../store/actionCreators/noteAC";
import { fetchData } from "../../store/actionCreators/noteAC";
import { FETCH_DATA } from "../../store/actions/notesAction";
import "./Sidebar.scss";

const Sidebar = () => {
  const notes = useSelector(({ notes }) => notes.notes);
  const isLoading = useSelector(({ notes }) => notes.isLoading);
  console.log(notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log("notes", notes);

  if (!notes)
    return <p style={{ fontSize: 24 }}>You don't have any notes yet</p>;
  // if (isLoading) return <h1>Loading...</h1>

  return (
    <ul>
      {notes &&
        notes.map(({ text, id }, index) => (
          <ListItem
            id={id}
            index={index + 1}
            text={text}
            key={id}
          />
        ))}
    </ul>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.array,
};
Sidebar.defaultProps = {
  notes: null,
};

export default Sidebar;
