const pool=require('../db/conexion.js');

const agregarPost=async (titulo,img,descripcion,likes)=>{
    try {
        const query="Insert into posts (id,titulo,img,descripcion,likes) Values (default,$1,$2,$3,$4)";

        const values=[titulo,img,descripcion,likes];
        const result=await pool.query(query,values);
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }

}

const obtenerPost=async ()=>{
    try {
        const query="select * from posts";
        const {rows}=await pool.query(query);

        return rows;

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports={
    agregarPost,
    obtenerPost
}