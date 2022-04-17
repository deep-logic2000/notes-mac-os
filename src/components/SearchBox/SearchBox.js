import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../store/actionCreators/noteAC";
import { Input } from "antd";
import './SearchBox.scss'

const SearchBox = () => {
  const searchText = useSelector(state => state.notes.searchText);
  console.log(searchText);

  const dispatch = useDispatch();
  // console.log(searchText);
  // console.log(state);
  const { Search } = Input;

  const onSearch = value => dispatch(changeSearchValue(value));

  return (
    <div className="searchBoxWrapper">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};


export default SearchBox;
