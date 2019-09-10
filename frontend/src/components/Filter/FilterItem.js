import React from 'react';
import './filteritem.css';
const FilterItem = ({ filter, id, setFilter }) => {
  const { name, value } = filter;

  const handleClick = (event)=>{
    setFilter(value)
  }


  return (
    <li>
      <input type="radio" name="category" className="filter-selector"  id={ id }/>
      <label htmlFor={ id } onClick={ (event)=>handleClick(event)}>{ name }</label>
    </li>
      );
};

export default FilterItem;
