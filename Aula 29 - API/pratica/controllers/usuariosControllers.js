const ususariosServices = require("../services/usuariosServices")


async function getAll(){
    try{
        const usuarios = await ususariosServices.getUsuarios()
        res.json(usuarios)
    }catch(err){
        console.log(err),
        next(err)
    }
}

async function getOne(){
    try{
        const usuarios = await ususariosServices.getUsuarios()
        res.json(usuarios)
    }catch(err){
        console.log(err),
        next(err)
    }
}

async function create (){
    try{
        const usuarios = await ususariosServices.getUsuarios()
        res.json(usuarios)
    }catch(err){
        console.log(err),
        next(err)
    }
}

async function update(){
    try{
        const usuarios = await ususariosServices.getUsuarios()
        res.json(usuarios)
    }catch(err){
        console.log(err),
        next(err)
    }
}

async function remove(){
    try{
        const usuarios = await ususariosServices.getUsuarios()
        res.json(usuarios)
    }catch(err){
        console.log(err),
        next(err)
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}

