const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente de una tarea"
};

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "borrado elemento por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

/* const opts = {
    descripcion: {
        demand: true,
        alias: "d",
        desc: "Descripción de la tarea por hacer"
    },
    completado: {
        alias: "c",
        default: true,
        desc: "Marca como completado o pendiente de una tarea"
    }
}

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", opts)
    .command("actualizar", "Actualiza el estado completado de una tarea", opts)
    .help()
    .argv;

module.exports = {
    argv
} */