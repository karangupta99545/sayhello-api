const express = require("express");
const app = express();

// Route
app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User." });
});

// Run on Port 80
app.listen(80, () => {
  console.log("Server running on port 80");
});
