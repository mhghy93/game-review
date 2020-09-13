const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");

const app = express();

// connect database
connectDB();

app.use(bodyParser.json());

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/admin", require("./routes/adminLogin"));
app.use("/api/game", require("./routes/game"));
app.use("/api/game/review", require("./routes/review"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
