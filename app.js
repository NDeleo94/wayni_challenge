const express = require("express");
const app = express();
const conectarDB = require("./config/db");
require("dotenv").config()

conectarDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/files", require("./routers/file"))
app.use("/api/entities", require("./routers/entity"))
app.use("/api/debtors", require("./routers/debtor"))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
});
