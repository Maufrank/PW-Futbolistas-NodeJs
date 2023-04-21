const {request, response} = require("express");
const { FindEquipo, addEquipo, EliminaEquipo, ActualizarEquipo, FindEquipoOne, FindNombreE, FindTitulos, FindLiga, FindNacionalidad, FindDivision} = require("../bd/equipo");
const modelo = require("../bd/equipoMode");

const equipoGet = async(req = request, res = response)=>{
    const resultado = await FindEquipo(modelo);
    res.render("consultarE", {data: resultado});
};

const inicioGet = async(req = request, res = response)=>{
    res.render("index");
};

const equipoAddGet = async (req = request, res = response) => {
    res.render("agregarEquipo");
}

const equipoAddPost = async(req = request, res = response) => {
    await addEquipo(modelo, req.body);
    res.redirect("/equipo");
}

const equipoEliminarGet = async(req = request, res = response) => {
    await EliminaEquipo(modelo, req.params.id);
    res.redirect("/equipo");
}

// const jugadorEditarGet = async(req = request, res = response) => {
//     const resultado = await FindUnicornioOne(modelo, req.params.id);
//     console.log(resultado);
//     res.render("actualizar", {data: resultado});
// }

const equipoEditarGet = async(req = request, res = response) => {
    const resultado = await FindEquipoOne(modelo, req.params.id);

    console.log(resultado);
    fecha = (resultado.fechaE).toLocaleDateString();
    fechaa = fecha.split('/');
    fechac = fechaa[2]+"-0"+fechaa[0]+"-"+fechaa[1];
    console.log(fechac);

    division = (resultado.division).toString();
    if(division == 'primera'){
        divisionp = 'checked';
        divisions = '';
    }else{
        divisionp = '';
        divisions = 'checked';
    }

    res.render("actualizarE", {data: resultado, fechaE: fechac, primera: divisionp, segunda: divisions});

}

const equipoActualizar = async(req = request, res = response) => {
    await ActualizarEquipo(modelo, req.body);
    console.log(req.body);
    res.redirect("/equipo");
}

const buscarNombreE = async(req = request, res = response)=>{
    const resultado = await FindNombreE(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarE", {data: resultado});
};

const buscarTitulos = async(req = request, res = response)=>{
    const resultado = await FindTitulos(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarE", {data: resultado});
};

const buscarLiga = async(req = request, res = response)=>{
    const resultado = await FindLiga(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarE", {data: resultado});
};

const buscarNacionalidad = async(req = request, res = response)=>{
    const resultado = await FindNacionalidad(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarE", {data: resultado});
};

const buscarDivision = async(req = request, res = response)=>{
    const resultado = await FindDivision(modelo, req.body);
    // res.render("/filtroPosicion", {data: resultado});
    res.render("consultarE", {data: resultado});
};

module.exports = {
    equipoGet,
    equipoAddGet,
    equipoAddPost,
    equipoEliminarGet,
    equipoActualizar,
    equipoEditarGet,
    inicioGet,
    buscarNombreE,
    buscarTitulos,
    buscarLiga,
    buscarNacionalidad,
    buscarDivision
};