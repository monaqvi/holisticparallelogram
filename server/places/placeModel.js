var Sequelize = require('sequelize');
var db = require(__dirname + '/../db/db.js');

var Place = db.define('Place',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    googlePlaceId: {
      type: Sequelize.STRING,
      field: 'google_place_id'
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING
<<<<<<< 3c0e9e4696794d90c1fc1eb293acf746db835f8b
=======
    },
    image: {
      type: Sequelize.STRING,
    },
    lat: {
      type: Sequelize.INTEGER,
      field: 'lat'
    },
    lng: {
      type: Sequelize.INTEGER,
      field: 'lng'
>>>>>>> add lat and lng to DB
    }
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);

module.exports = Place;
