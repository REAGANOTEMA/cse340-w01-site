const express = require("express");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("index", { 
    name: "Guest",      // You can replace this dynamically if needed
    title: "CSE Motors" // Page title for <head>
  });
});

module.exports = router;
