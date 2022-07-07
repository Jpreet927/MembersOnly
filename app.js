const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Database config
const db = process.env.MONGO_URI;
mongoose
    .connect(db, { newUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
