const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express EJS Layouts
app.use(expressLayouts);
app.set("layout", "layout"); // default layout file

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);

// Dynamic port for Render
const PORT = process.env.PORT || 5500;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
