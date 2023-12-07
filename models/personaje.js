const mongoose = require('mongoose');

var schema = mongoose.Schema;

var PersonajeSchema = schema({
    nombre: String,
    estado: String,
    especie: String,
    genero: String,
    imagen: String
}, {
    collection: "personaje",
    versionKey: false
});

module.exports = mongoose.model("Personaje", PersonajeSchema);