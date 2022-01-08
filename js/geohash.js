// Author : Ramaguru Radhakrishnan
// Date   : 07 Jan 2022 
// GeoHash from H3
// Install as "npm install h3-js"

const h3 = require("h3-js");

function toGeoHash(lat, lng, res) {
  // Example Lat and Long of Ettimadai, Coimbatore
  // const lat = 10.898061;
  // const lng = 76.90031;
  // const res = 10;
  return h3.geoToH3(lat, lng, res);
}

function fromGeoHash(h) {
  //const h = '8a603148880ffff';
  return h3.h3ToGeo(h);
}

function getBoundary(h) {
  //const h = '8a603148880ffff';
  return h3.h3ToGeoBoundary(h);
}

console.log("The Geo Hash of Ettimadai is ", toGeoHash("10.898061", "76.90031", "10"), "\n");
console.log("The Lat and Long of Ettimadai from GeoHash is ", fromGeoHash("8a603148880ffff"), "\n");
console.log("The Boundary Lat and Long for GeoHash is ", getBoundary("8a603148880ffff"), "\n");