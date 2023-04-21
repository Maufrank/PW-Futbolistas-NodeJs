const {request, response} = require("express");
const { FindJugador, addJugador, EliminaJugador, ActualizarJugador, FindJugadorOne, FindPosicion, FindNombre, FindDorsal, FindGenero, FindPeso} = require("../bd/jugador");
const modelo = require("../bd/jugadorMode");

const jugadorGet = async(req = request, res = response)=>{
    const resultado = await FindJugador(modelo);
    res.render("consultarJ", {data: resultado});
};

const jugadorAddGet = async (req = request, res = response) => {
    res.render("agregarJugador");
}

const jugadorAddPost = async(req = request, res = response) => {
    await addJugador(modelo, req.body);
    res.redirect("/jugador");
}

const jugadorEliminarGet = async(req = request, res = response) => {
    await EliminaJugador(modelo, req.params.id);
    res.redirect("/jugador");
}

// const jugadorEditarGet = async(req = request, res = response) => {
//     const resultado = await FindUnicornioOne(modelo, req.params.id);
//     console.log(resultado);
//     res.render("actualizar", {data: resultado});
// }

const jugadorEditarGet = async(req = request, res = response) => {
    const resultado = await FindJugadorOne(modelo, req.params.id);

    console.log(resultado.fecha);
    fecha = (resultado.fecha).toLocaleDateString();
    fechaa = fecha.split('/');
    fechac = fechaa[2]+"-0"+fechaa[0]+"-"+fechaa[1];
    console.log(fechac);

    genero = (resultado.genero).toString();
    if(genero == 'm'){
        generom = 'checked';
        generof = '';
    }else{
        generom = '';
        generof = 'checked';
    }

    res.render("actualizar", {data: resultado, fechaN: fechac, masculino: generom, femenino: generof});
}

const jugadorActualizar = async(req = request, res = response) => {
    await ActualizarJugador(modelo, req.body);
    console.log(req.body);
    res.redirect("/jugador");
}

const buscarPosicion = async(req = request, res = response)=>{
    const resultado = await FindPosicion(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarJ", {data: resultado});
};

const buscarNombre = async(req = request, res = response)=>{
    const resultado = await FindNombre(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarJ", {data: resultado});
};

const buscarDorsal = async(req = request, res = response)=>{
    const resultado = await FindDorsal(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarJ", {data: resultado});
};

const buscarGenero = async(req = request, res = response)=>{
    const resultado = await FindGenero(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarJ", {data: resultado});
};

const buscarPeso = async(req = request, res = response)=>{
    const resultado = await FindPeso(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarJ", {data: resultado});
};

module.exports = {
    jugadorGet,
    jugadorAddGet,
    jugadorAddPost,
    jugadorEliminarGet,
    jugadorActualizar,
    jugadorEditarGet,
    buscarPosicion,
    buscarNombre,
    buscarDorsal,
    buscarGenero,
    buscarPeso,
};
