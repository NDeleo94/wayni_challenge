const mongoose = require('mongoose');
require("dotenv").config({ path: ".env" });

const conectarDB = () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.STRING_SERVER_MONGO, { useNewUrlParser: true });
        console.log("Conectado!");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);
    }
}

module.exports = conectarDB