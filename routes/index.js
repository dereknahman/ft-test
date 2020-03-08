const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  res.render("layout", { title: "Srchr" });
});

router.get("/search", (req, res) => {
  const searchTerm = req.query.searchQuery;
  console.log(searchTerm);

  const apiHeaders = {
    "X-Api-Key": process.env.API_KEY,
    "Content-Type": "application/json"
  };

  const requestData = {
    queryString: `title:${searchTerm}`,
    resultContext: {
      maxResults: 10,
      aspects: ["title"]
    }
  };

  axios
    .post("http://api.ft.com/content/search/v1", requestData, {
      headers: apiHeaders
    })
    .then(function(response) {
      const results = response.data.results[0].results;
      // console.log(response.data.results[0].results);
      res.render("layout", { searchTerm, results });
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;

// TODO:
// consider refactor later - everything in utils
// return results from axios (l31) and pass it in alongside searchTerm on l36
