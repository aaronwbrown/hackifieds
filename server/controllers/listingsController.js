var db = require('../../db/db');
var _ = require('underscore');

//Controller method - retrieve joined listing/user/category fields from DB
exports.getAll = function(category, callback) {
  // Listing.findAll({ order: ['createdAt', 'DESC'] })
  db.Listing.findAll({
    include:
    [{
      model: db.Category,
      attributes: ['categoryName'],
      where: {categoryName: category},
    },
    {
      model: db.User,
      attributes: ['username', 'phone', 'email']
    },
    {
      model: db.Image,
      attributes: ['path']
    }],
    order: 'createdAt DESC'
  })
    .then(function(listings) {
      callback(200, listings);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

// Controller method - get filtered results
exports.getFiltered = function(filters, callback) {
  console.log('$$$filters', filters);
  console.log('$$$price', filters.price);
  // const price = +filters.price;
  // console.log(typeof price);
  var where = {};
  if (filters.price !== undefined) { where.price = filters.price; }
  if (filters.location !== undefined) { where.location = filters.location; }

  db.Listing.findAll({
    include:
    [{
      model: db.Category,
      attributes: ['categoryName'],
      where: {categoryName: filters.category},
    },
    {
      model: db.User,
      attributes: ['username', 'phone', 'email']
    },
    {
      model: db.Image,
      attributes: ['path']
    }],
    order: 'createdAt DESC',
    where: {}, raw: true
  })
    .then(function(listings) {
      callback(200, listings);
      console.log('$$$$listings', listings);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

//Controller method - add a listings to DB
exports.addOne = function(listing, images, callback) {
  db.Listing.create(listing)
    .then(function(listing) {
      if (images.length > 0) {
        _.each(images, function(image) {
          var img = {
            path: 'uploads/' + image.filename,
            listingId: listing.listingId
          };
          db.Image.create(img)
            .then(function(image) {
              console.log('Image upload successful');
            })
            .catch(function(error) {
              console.error(error);
            });
        });
      }
      callback(201, listing);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

