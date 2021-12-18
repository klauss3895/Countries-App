const {Router, response} = require ("express");
const axios = require ("axios");
const {Countries} = require("../db");


const router = Router();

let favorito = ""

const getFavorites=()=>{
    return new Promise(function(resolve,reject){
        if(!Countries){
            reject( new Error("ERROR"))
        } else {
            resolve(Countries.findAll({where:{name:"Argentina"}}))
            // resolve(Countries.findAll({where:{favorite:"favorite"}}))
        }
    })
}

router.get("/",(req,res)=>{
    
    getFavorites()
    .then(response=>{
        favorito = response
        return console.log(res)})
    .catch(error=>{return console.log(error)})

    res.send(favorito)
})

router.put("/put/:id",async(req,res)=>{
    try {
        let id = req.params.id
        let{favorite}=req.body
        let response=await Countries.update({favorite},
            {
            where: {
                id: id,
            },
        });
        res.send(response)
    } catch (error) {
        res.send(error)
    }

})

module.exports = router