import React from 'react';
import $ from 'jquery';


// filter listings here
// push into an array
// map listings into divs

// ORRRRRR

// send filter props from here to the server
// then send back the filtered listings


const Filter = props => {
  //Set default values for location
  const locations = {All: 0};
  const filterLocs = [];


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
  // Sort the filter items alphabetically
  filterLocs.sort();

  // Handle Form Submission
  // send to props.handleFilterItemClick
    // which will then send to server
  const data = {};
  const handleFilterSubmit = function(e) {

    const target = e.target.name
    if (target === 'Location') {
      data.location = e.target.value;
    } else if (target === 'Price') {
      data.price = e.target.value;
    } else if (target === 'Distance') {
      data.distance = e.target.value;
    } else if (target === 'Rooms') {
      data.rooms = e.target.value;
    }
    props.handleFilterItemClick(data)
  }



  //Return the filter component
  return (
    <form>
      <div>
        <select name="Location" id="location" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
          {filterLocs.map(loc =>
            <option value={loc}>{loc}</option>
          )}
        </select>
      </div>
      <div>
        <select name="Price" id="price" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
            <option value="1,1000">0 - 1000</option>
            <option value="1001,2000">$1000 - $2000</option>
            <option value="2001,3000">$2000 - $3000</option>
            <option value="3001,4000">$3000 - $4000</option>
            <option value="5000">$5000+</option>
        </select>
      </div>
      <div>
        <select name="Distance" id="distance" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
            <option value="2">{"<2"}</option>
            <option value="5">{"<5"}</option>
            <option value="10">{"<10"}</option>
            <option value="11">{"10+"}</option>
        </select>
      </div>
      <div>
        <select name="Rooms" id="rooms" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
            <option value="studio">Studio</option>
            <option value="hacker">Hacker House</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
