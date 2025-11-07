const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const userName = "Reagan Otema"; // your name
  res.render("index", { 
    title: "CSE Motors - Home",
    name: userName
  });
});

module.exports = router;
