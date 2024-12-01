const express= require('express');
const api=express.Router();

//importando el controlador
const LikeMeController=require('../controllers/likemeController');

//creamos nuestras rutas para acceder al api
api.post('/',LikeMeController.agregarPost);
api.get('/',LikeMeController.getPosts);

module.exports= api;