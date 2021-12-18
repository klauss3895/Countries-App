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
                image:el.flags[1],
                continent:el.region,
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
    const info = await getAllInfo();
    res.send(info);
})

router.get('/:id', async (req, res) => {
    const id=req.params.id;
    const infoTotal = await getAllInfo();
    console.log(id)
    try {
        if(id){
            const result = await infoTotal.filter(el=>el.id===id.toUpperCase())
            res.send(result)
        }
        else{
            res.send("No se encontro el pais")
        }
    } catch (error) {
        res.send(error)
    }
    // const project = await Countries.findAll({ where: {id:id.toUpperCase()}});
    // res.send(project)
});


module.exports = router;
