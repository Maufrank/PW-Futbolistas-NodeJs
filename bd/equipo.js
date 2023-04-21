const mongoose = require("mongoose");

const FindEquipo = async(modelo) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({});
    return resultado;
};

const addEquipo = async(modelo, equipo) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const nube = new modelo(equipo);
    await nube.save();
}

const FindUpdateEquipo = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({_id: id});
    return resultado;
}

const EliminaEquipo = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const res = await modelo.findById(id);
    await res.delete();
}

const ActualizarEquipo = async(modelo, object) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const res = await modelo.findById(object._id);
    console.log(res)

    res.nombreE = object.nombreE ? object.nombreE : res.nombreE;
    res.fechaE = object.fechaE
        ? object.fechaE
        : res.fechaE;
    res.titulos = object.titulos
        ? object.titulos
        : res.titulos;
    res.division = object.division ? object.division : res.division;
    res.liga = object.liga ? object.liga : res.liga;


    res.nacionalidad = object.nacionalidad ? object.nacionalidad : res.nacionalidad;

    res.save();
}

const FindEquipoOne = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.findById(id);
    return resultado;
}

const FindNombreE = async(modelo, nombreE) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        titulos: {
            $lt: nombreE.nombreE
        } 
    })
    return post;
}

const FindTitulos = async(modelo, titulos) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        titulos: {
            $gt: titulos.titulos
        }
    })
    return post;
}

const FindLiga = async(modelo, liga) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        liga: liga.liga
    })
    return post;
}

const FindNacionalidad = async(modelo, nacionalidad) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        
    }).sort({titulos: -1})
    return post;
}

const FindDivision = async(modelo, division) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const post = await modelo.find({
        division: {
            $ne: division.division
        }
    })
    return post;
}

module.exports = {FindEquipo, addEquipo, EliminaEquipo, FindEquipoOne, FindEquipo, ActualizarEquipo, FindUpdateEquipo, FindNombreE, FindTitulos, FindLiga, FindNacionalidad, FindDivision};