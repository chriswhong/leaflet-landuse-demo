var map = L.map('my-map').setView([40.713435,-73.971291], 12);

L.tileLayer('https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var pizzaData = [
  {
    name: 'Chris',
    pizzaShop: "Ben's Pizza",
    lat: 40.730376,
    lon: -74.0008582,
    school: 'Wagner',
  },
  {
    name: 'Maxwell',
    pizzaShop: "Joe's",
    lat: 40.7305876,
    lon: -74.002141,
    school: 'Wagner',
  },
  {
    name: 'Paolo',
    pizzaShop: "John's of Bleeker",
    lat: 40.725717,
    lon: -73.991492,
    school: 'Wagner',
  },
  {
    name: 'Rigel',
    pizzaShop: "Di Fara",
    lat: 40.6250156,
    lon: -73.9659225,
    school: 'Life',
  },
  {
    name: 'Jack',
    pizzaShop: "Paulie Gee's",
    lat: 40.729662,
    lon: -73.958579,
    school: 'CUSP',
  },
  {
    name: 'Lisanne',
    pizzaShop: "ZuriLee",
    lat: 40.6545,
    lon: -73.9594,
    school: 'Life',
  },
  {
    name: 'Niki',
    pizzaShop: "Pizza Palace",
    lat: 40.77638,
    lon: -73.9112052,
    school: 'Life',
  },
  {
    name: 'Monica',
    pizzaShop: "Percy's Pizza",
    lat: 40.72915,
    lon: -74.001398,
    school: 'Wagner',
  },
];

// how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.name + ' likes to eat at ' +  chrisPizza.pizzaShop);


// how to add a marker for each object in the array

pizzaData.forEach(function(pizzaObject) {
  L.marker([pizzaObject.lat, pizzaObject.lon]).addTo(map)
      .bindPopup(pizzaObject.name + ' likes to eat at ' +  pizzaObject.pizzaShop);
});
