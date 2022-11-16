const owner = require("./data/Owners.json");
const parkingLots = require ("./data/ParkingLots.json");
const creditCard = require ("./data/CreditCard.json");
const drivers = require ("./data/Drivers.json");
const reservations = require ("./data/Reservations.json");
const parkingSlip = require ("./data/ParkingSlip.json");
const reviews = require ("./data/Reviews.json");


module.exports = {
  owner,
  parkingLots,
  creditCard,
  drivers,
  reservations,
  parkingSlip,
  reviews
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
