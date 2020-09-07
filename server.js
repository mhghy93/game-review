const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");

const app = express();

// connect database
connectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("API running"));

// Routes
app.use("/api/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
