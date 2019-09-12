import React from 'react';
import FilterItem from './FilterItem';

const Filters = ({ filters, setFilter }) => {
  const filterElements = filters.map((filter, i) => <FilterItem key={i} id={i} filter={ filter } setFilter={setFilter}/>);

  return (
    <section id="filterCategories">
      <ul className="nav nav-tabs" id="filterlist">
        { filterElements }
      </ul>
    </section>
  );
};

export default Filters;