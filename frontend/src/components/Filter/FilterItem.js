import React from 'react';

const FilterItem = ({ filter, id, setFilter }) => {
  const { name, value } = filter;

  return (
    <li>
      <input type="radio" name="category" value={ value } id={ id } defaultChecked onClick={setFilter({ name })} />
      <label htmlFor="filter0">{ name }</label>
    </li>
  );
};

export default FilterItem;
