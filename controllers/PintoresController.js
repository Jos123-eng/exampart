let mongoose = require('mongoose');

let Pintores = require('../models/Pintores');

let pintoresController = {};


pintoresController.list = (req, res)=>{
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('Error: ', err)
        }res.render('../views/index', options={
            pintores: pintor,
            titulo: "Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;