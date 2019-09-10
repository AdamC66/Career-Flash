import React from 'react';
import './filteritem.css';
const FilterItem = ({ filter, id, setFilter }) => {
  const { name, value } = filter;

  const handleClick = (event)=>{
    setFilter(value)
    event.target.classList.toggle("active")
  }


  return (
      <div name="category" className="filter-selector"  id={ id } onClick={ (event)=>handleClick(event) }>{ name }</div>
  );
};

export default FilterItem;
