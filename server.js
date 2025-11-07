const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index"); // Your existing routes
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Enable layouts
app.use(expressLayouts);
app.set("layout", "layout"); // default layout file: views/layout.ejs

// Middleware to serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", indexRouter);

// Dynamic port for Render
const PORT = process.env.PORT || 5500;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
console.log(`Server running at http://${HOST}:${PORT}`);
});
