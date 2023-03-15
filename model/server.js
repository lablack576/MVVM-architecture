const express = require("express");
const cors = require("cors");
const pool = require("./pgManager");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Express server ON");
});

app.post("/register", pool.register);
app.post("/login", pool.login);

app.listen(4000, () => console.log("Server on localhost:4000"));
