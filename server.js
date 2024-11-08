const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("ILLaya Thalapathy goat goat goat goat!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
