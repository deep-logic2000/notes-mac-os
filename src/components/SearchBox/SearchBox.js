import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../store/actionCreators/noteAC";
import { Input } from "antd";

const SearchBox = () => {
  const searchText = useSelector(state => state.notes.searchText);
  console.log(searchText);

  const dispatch = useDispatch();
  // console.log(searchText);
  // console.log(state);
  const { Search } = Input;

  const onSearch = value => dispatch(changeSearchValue(value));

  return (
    <div className="form-group p-2 mb-0">
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
