const mongoose = require("mongoose");

const FindJugador = async(modelo) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({});
    return resultado;
};

const addJugador = async(modelo, jugador) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const nube = new modelo(jugador);
    await nube.save();
}

const FindUpdateJugador = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({_id: id});
    return resultado;
}

const EliminaJugador = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const resultado = await modelo.findById(id);
    console.log(resultado);
    await resultado.delete();
}

const ActualizarJugador = async(modelo, object) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const res = await modelo.findById(object._id);
    console.log(res)

    res.nombre = object.nombre ? object.nombre : res.nombre;
    res.fecha = object.fecha
        ? object.fecha
        : res.fecha;
    res.dorsal = object.dorsal
        ? object.dorsal
        : res.dorsal;
    res.genero = object.genero ? object.genero : res.genero;
    res.peso = object.peso ? object.peso : res.peso;

    res.posicion = object.posicion ? object.posicion : res.posicion;

    res.save();
}

const FindJugadorOne = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.findById(id);
    return resultado;
}

const FindPosicion = async(modelo, posicion) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        posicion: posicion.posicion
    })
    return post;
}

const FindNombre = async(modelo, nombre) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        posicion: {
            $ne: nombre.nombre
        }
    })
    return post;
}

const FindDorsal = async(modelo, dorsal) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        dorsal:{
            $lt: dorsal.dorsal
        }
    })
    return post;
}

const FindGenero = async(modelo, genero) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        
    }).sort({dorsal: -1})
    return post;
}

const FindPeso = async(modelo, peso) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        peso: {
             $gte: peso.peso
        }
    })
    return post;
}

module.exports = {FindJugador, addJugador, EliminaJugador, FindJugadorOne, FindJugador, ActualizarJugador, FindUpdateJugador, FindPosicion, FindNombre, FindDorsal, FindGenero, FindPeso};