import React from 'react';
import './filteritem.css';
const FilterItem = ({ filter, id, setFilter }) => {
  const { name, value } = filter;

  const handleClick = (event)=>{
    setFilter(value)
  }


  return (
    <li className="nav-item" id="filteritem">

      <a className="nav-link" data-toggle="tab" href="#home" onClick={ (event)=>handleClick(event)}>{ name }</a>

      
    </li>
      );
};

export default FilterItem;
