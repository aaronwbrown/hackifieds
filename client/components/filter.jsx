import React from 'react';

const Filter = props => {
  const data = {};
  const handleFilterSubmit = function(e) {
    const target = e.target.name
    if (target === 'Distance') {
      data.distance = e.target.value;
    } else if (target === 'Price') {
      data.price = e.target.value;
    } else if (target === 'RoomType') {
      data.roomtype = e.target.value;
    }
    props.handleFilterItemClick(data)
  }

  return (
    <form>
      <div>
        <h3>Distance</h3>
        <select name="Distance" id="distance" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
            <option value="2">{"<2"}</option>
            <option value="5">{"<5"}</option>
            <option value="10">{"<10"}</option>
            <option value="11">{"10+"}</option>
        </select>
      </div>
      <div>
      <h3>Price</h3>
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
      <h3>Room Typegit </h3>
        <select name="RoomType" id="roomtype" onChange={handleFilterSubmit.bind(this)}>
            <option value="All" selected>All</option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
            <option value="House">House</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
