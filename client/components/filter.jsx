import React from 'react';

const Filter = props => {
  console.log(props);
  //Set default values for location
  const locations = {All: 0};
  const filterLocs = ['All'];
  // Set default for price
  const filterPrice = [];

  props.listings.forEach( listing => {
    // ***** LOCATION ***** //
    if( !locations[listing.location] ) {
      locations[listing.location] = 0;
      filterLocs.push(listing.location);
    }
    // Listings count for each filter item
    locations[listing.location]++;
    locations['All']++;
  });

  props.listings.forEach ( listing => {
    filterPrice.push(listing.price);
  })

  // Sort the filter items alphabetically
  filterLocs.sort();

  //Return the filter component
  return (
    <ul>
        <select name="Neighborhood" onChange={props.handleFilterItemClick}>
          {filterLocs.map(loc =>
            <option value={loc}>{loc}</option>
          )}
        </select>
        <select name="Price" onChange={props.onPriceFilter}>
          <option value="Descend">Descend</option>
          <option value="Ascend">Ascend</option>
        </select>
    </ul>
  );
};

export default Filter;

        // <li className="filter-item list-group-item">
        //   <span className='filter-attribute' id={loc} onClick={props.handleFilterItemClick}>{loc}</span>
        //   <span className='filter-count badge badge-primary'>{locations[loc]}</span>
        // </li>