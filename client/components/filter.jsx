import React from 'react';

const Filter = props => {
  console.log(props);
  //Set default values for All items
  let locations = {All: 0};
  let filterLocs = ['All'];

  //Populate the filtered list
  props.listings.forEach( listing => {
    if( !locations[listing.location] ) {
      locations[listing.location] = 0;
      filterLocs.push(listing.location);
    }
    //Listings count for each filter item
    locations[listing.location]++;
    locations['All']++;
  });

  const mouseDown = (e) => {
    console.log(e)
  };
  // props.listings.forEach( listing => {
  //   if ( ! )
  // });


  //Sort the filter items alphabetically
  filterLocs.sort();

  //Return the filter component
  return (
    <ul>
        <select value="location" onMouseDown={mouseDown} name="Neighborhood" onChange={props.handleFilterItemClick}>
      { filterLocs.map(loc =>
          <option value={loc}>{loc}</option>
      )}
        </select>
    </ul>
  );
};

export default Filter;

        // <li className="filter-item list-group-item">
        //   <span className='filter-attribute' id={loc} onClick={props.handleFilterItemClick}>{loc}</span>
        //   <span className='filter-count badge badge-primary'>{locations[loc]}</span>
        // </li>