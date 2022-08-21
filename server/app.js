require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => console.log(err));

app.use("/api/user", require("./routes/user_routes"));
app.use("/api/event", require("./routes/event_routes"));

app.listen(port, () => console.log("http://localhost:" + port));
