const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err)
            throw new Error("No se pudo grabar", err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
}
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(x => x.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].de = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(x => x.descripcion !== descripcion);
    if (nuevoListado.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}