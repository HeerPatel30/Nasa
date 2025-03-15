import launches from "../model/launches.models.js";


function getalllaunches (req,res,next){
    console.log("🚀 ~ launches:", launches)
    
    return res.status(200).json(Array.from(launches.values()));

}

export default getalllaunches

