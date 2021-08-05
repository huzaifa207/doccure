let axios = require("axios");

axios
  .get("http://localhost:1337/doctors")
  .then((response) => console.log(response.data));

// fetch("http://localhost:1337/doctors")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
