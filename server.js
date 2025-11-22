const express = require("express");
const path = require("path");

const app = express();

// Static website serve
app.use(express.static(path.join(__dirname, "public")));

// Example backend API
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is running!" });
});

// Render required port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
