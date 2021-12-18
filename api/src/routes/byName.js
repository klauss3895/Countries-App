const {Router} = require ("express");
const axios = require ("axios");
const {Countries,TouristActivity} = require("../db");


const router = Router();

const getInfoApi = async ()=>{
    let countryDb = await Countries.findAll();

    if(countryDb.length===0){
        const infoApi = await axios.get("https://restcountries.com/v3/all")
        const data = infoApi.data;
        const info = await data.map(el =>{
            return {
                id:el.cca3,
                name:el.name.common,
                image:el.flags[0],
                continent:el.continents.map(el=>el),
                capital:el.capital,
                subregion:el.subregion,
                area:el.area,
                population:el.population
            }
        })
        const infoDb = await Countries.bulkCreate(info)
        return (infoDb) 
    }
    return countryDb
}

const infoActivity = async () => {
    return await Countries.findAll({include:TouristActivity})
}

// Concateno la info 

const getAllInfo = async ()=>{
    const apiInfo = await getInfoApi();
    const infoDb = await infoActivity();
    return infoDb; 
}

router.get("/", async (req,res)=>{
    const getinfo=await getAllInfo()
    const name = req.query.name.toLowerCase()
    try {

        if(name){
            let mayus=name.charAt(0).toUpperCase()
            let resto=name.slice(1)
            const result = mayus+resto

            let project = await getinfo.filter(el=>el.name.includes(result));
            if(project.length){
                res.send(project)
            }else{
                res.send([{error:"the country does not exist"}])
            }
            // res.send(project)
            console.log(project)
            
        }
        else{
            res.send("No se encontro")
        }
    } catch (error) {
        res.send(error)   
    }
        
})

router.get("/activity", async (req,res)=>{
    const getinfo=await getAllInfo()
    const activity = req.query.activity
    
    console.log(getinfo)
    try {
        if(activity){
            console.log(activity)
            console.log("ENTRAA")
            let  nameActivity = await getinfo.filter(el=>el.TouristActivities.find(el=>el.name.toLowerCase().includes(activity.toLowerCase())))
            console.log("console",nameActivity)
            if(nameActivity.length)res.status(200).json(nameActivity)
                  
        } else {
            res.status(404).send("no tourist activity");  
        }
    } catch (error) {
        res.send(error)   
    }
        
})
module.exports = router