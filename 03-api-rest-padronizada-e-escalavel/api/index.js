const express = require("express");
const config = require("config");
const routes = require("./routes/suppliers/index");

const app = express();
app.use(express.json());

app.use("/api/suppliers/", routes);

app.listen(config.get("api.port"), () => console.log("API running"));
