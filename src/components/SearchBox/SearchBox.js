import React from "react";
import { Input } from 'antd';



const SearchBox = ({searchValue,changeSearchValue}) => {
    const { Search } = Input;

    const onSearch = value => console.log(value);

    return (
        <div className="form-group p-2 mb-0">
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
            
            {/* <input type="text"
                   className="form-control"
                   placeholder="Search by notes..."
                //    value={searchValue}
                //    onChange={(e) => changeSearchValue(e.target.value,getNotes())}
                   /> */}
        </div>
    )
}

export default SearchBox