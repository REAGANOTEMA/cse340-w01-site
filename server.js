const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index"); // Make sure this file exists

const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", indexRouter);

// Local server values
const PORT = 5500;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
