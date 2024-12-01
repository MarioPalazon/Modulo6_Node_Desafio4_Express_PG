const gestorPosts=require("../models/gestorPost.js");

const agregarPost= async (req,res)=>{
    try {
        
        const{titulo,url:img,descripcion,likes}=req.body;

        const {command,rowCount}= await gestorPosts.agregarPost(titulo,img,descripcion,likes);
        if(rowCount>0){
            res.status(201).json({
                "estado":"ok",
                "msg":"Post agredado correctamente",
                "error":""
            });
        }else{
            res.status(400).json({
                "estado":"nok",
                "msg":"",
                "error":"Problemas al agregar el Post"
            });
        }

        return;

    } catch (error) {
        res.status(500).send(error);
        return;
    }
}

const getPosts= async (req,res)=>{
    try {

        const data=await gestorPosts.obtenerPost();
        
        res.status(200).json(data);
        return;

    } catch (error) {
        res.status(500).send(error);
        return;
    }
}

module.exports={
    agregarPost,
    getPosts
}