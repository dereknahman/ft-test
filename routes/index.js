const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("layout", { title: "Headlines" });
});

router.get("/search", (req, res) => {
  const searchTerm = req.query.searchQuery;

  const apiHeaders = {
    "X-Api-Key": process.env.API_KEY,
    "Content-Type": "application/json"
  };

  const requestData = {
    queryString: `title:${searchTerm}`,
    resultContext: {
      maxResults: 10,
      aspects: ["title", "location", "lifecycle", "summary", "editorial"]
    }
  };

  axios
    .post("http://api.ft.com/content/search/v1", requestData, {
      headers: apiHeaders
    })
    .then(function(response) {
      const results = response.data.results[0].results;
      res.render("layout", { searchTerm, results });
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
