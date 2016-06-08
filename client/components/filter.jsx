import { DropdownButton, MenuItem } from 'react-bootstrap';

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

  //Sort the filter items alphabetically
  filterLocs.sort();

  //Return the filter component
  return (
    <ul className='filter list-group'>
        <DropdownButton title="Neighborhood" className="filter-item list-group-item" id={props.listings}>
      { filterLocs.map(loc =>
          <MenuItem id={loc} onClick={props.handleFilterItemClick}>{loc}</MenuItem>
      )}
        </DropdownButton>
    </ul>
  );
};

export default Filter;

        // <li className="filter-item list-group-item">
        //   <span className='filter-attribute' id={loc} onClick={props.handleFilterItemClick}>{loc}</span>
        //   <span className='filter-count badge badge-primary'>{locations[loc]}</span>
        // </li>