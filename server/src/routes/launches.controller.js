import { getalllaunches, addnewLauch } from "../model/launches.models.js";

function httpgetalllaunches(req, res, next) {
  return getalllaunches(req, res, next); 
}

function httpaddlaunch(req, res) {
  const launch = req.body; 
//   console.log("🚀 ~ httpaddlaunch ~ launch:", launch)

  if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
    return res.status(400).json({
        error : 'missing required'
    })
  }
  launch.launchDate = new Date(launch.launchDate); 
  if(isNaN(launch.launchDate)){
     return  res.status(400).json(
        {
            error :"invalid date "
        }
    )
  }
  addnewLauch(launch); 
   return res.status(201).json(launch);
}

export { httpaddlaunch, httpgetalllaunches };
