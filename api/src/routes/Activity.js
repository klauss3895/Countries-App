const { default: axios } = require("axios");
const {Router} = require ("express");
const {TouristActivity,Countries} = require("../db");


const router = Router();




router.post("/post", async (req,res)=>{
    let {name,difficulty,duration,temporada,countriesid}=req.body;
    console.log(req.body)
    try {

        const [newActivity,create] = await TouristActivity.findOrCreate({where:{name:name},defaults:{
            difficulty,
            duration,
            temporada 
        }});
        console.log("NEWACTIVITY",newActivity)
        for(let el of countriesid){
            let country = await Countries.findByPk(el);
            await country.addTouristActivity(newActivity);
        }
        // let el = countriesid.toUpperCase()
        // let country = await Countries.findByPk(el);
        // await country.addTouristActivity(newActivity);
        console.log(newActivity);
        res.json(newActivity);
    } catch (error) {
        res.send (error)
    }

})


module.exports = router;



