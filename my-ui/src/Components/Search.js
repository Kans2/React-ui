import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing the search icon from React Icons
import { Dropdown } from 'react-bootstrap';
import { BsClipboard2Check } from "react-icons/bs";
import {UseState}  from "react";

const Search = () => {

  let [togglesort,setTogglesort] = useState(false);

  return (
    <div className="input-group">
      <span className="input-group-text"><FiSearch /></span>
      <input type="text" className="form-control" placeholder="Search..." />
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-custom">
          <Dropdown.Item  className="dropdown-item-custom"   href="#/action-1">Pet name: <BsClipboard2Check /></Dropdown.Item>
          <Dropdown.Item    className="dropdown-item-custom" href="#/action-2">Owner name <BsClipboard2Check /></Dropdown.Item>
          <Dropdown.Item     className="dropdown-item-custom" href="#/action-3">Date :  <BsClipboard2Check /></Dropdown.Item>
          <Dropdown.Item    className="dropdown-item-custom" href="#/action-3">Asc :  <BsClipboard2Check /></Dropdown.Item>
          <Dropdown.Item  className="dropdown-item-custom"  href="#/action-3">Desc :  <BsClipboard2Check /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Search;
