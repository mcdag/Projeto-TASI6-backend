const axios = require("axios");

const HOST = "http://localhost";
const PORT = 8080;

let count = 1;

let latitude = -8.05064582824707;
let longitude = -34.95094299316406;
let type = "assalto";

const latRange = [-8.05858, -8.04653];
const lonRange = [-34.95359, -34.94686];
const types = [
  "Assalto",
  "Com Matagal",
  "Pouca iluminação",
  "Assédio",
  "Pouca Gente",
];

const createReport = () => {
  axios.post(`${HOST}:${PORT}/report`, {
    authToken: "adsasd",
    userId: "asdasdasd",
    description: `${type} #${count++}`,
    anonymous: true,
    latitude: latitude,
    longitude: longitude,
    type: type,
  });

  console.log(`Created report for type: ${type}`);
};

const setRandomParams = () => {
  const latDiff = latRange[1] - latRange[0];
  latitude = latRange[0] + Math.random() * latDiff;
  const lonDiff = lonRange[1] - lonRange[0];
  longitude = lonRange[0] + Math.random() * lonDiff;
  type = types[Math.floor(Math.random() * types.length)];
};

setInterval(() => {
  setRandomParams();
  createReport();
}, 2000);
