const calc = require("./calc");  // import calc file
const {add, subtract, divide, multiply} = require("./calc"); // destructure methods from calc
const axios = require("axios"); // importing dependency - just use the name
const {makeCowSpeak} = require("./cow");

console.log(`2 + 5 = ${add(2,5)}`);
console.log(`18 - 9 = ${subtract(18,9)}`);
console.log(`3 * 23 = ${multiply(3,23)}`);
console.log(`348 / 8 = ${divide(348,8)}`);


// cat API example
const apiKey = "live_PoheuwY8DIBnYYANn97lRlKTKTvKR5ZFMAqmhHlULRFKbMD0hF2D65Fa2AgCeerA";
const address = `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1&api_key=${apiKey}`;

axios.get(address)
.then(({data}) => console.log("\n\nRANDOM CAT BREED\n\nBreed: ", data[0].breeds[0].name, 
                            "\n\nTemperament: ", data[0].breeds[0].temperament,
                            "\n\nDescription: ", data[0].breeds[0].description, "\n"));


console.log(makeCowSpeak("Moooooooo"));