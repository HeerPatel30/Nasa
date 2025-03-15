const launches = new Map();

let latestlaunchnumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer ISI",
  launchDate: new Date("December 30,2030"),
  target: "Kepler-442 b",
  customer: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

function getalllaunches (req,res,next){
    // console.log("🚀 ~ launches:", launches)
    
    return res.status(200).json(Array.from(launches.values()));

}

function abortlaunch(launchid){
  const aborted=  launches.get(launchid)
  aborted.upcoming = false 
  aborted.success = false 
  return aborted
  
}
function existlaunchid(launchid){
  return launches.has(launchid)
}
 function addnewLauch(launch) {
  latestlaunchnumber++;
  launches.set(latestlaunchnumber, Object.assign(launch, {
    success:true,
    flightNumber:latestlaunchnumber,
    customers:['ZTM','NASA'],
    upcoming:true
  }));
}
function httpAbortlaunch(req,res){
  const launchid = Number(req.params.id)
  console.log("🚀 ~ httpAbortlaunch ~ launchid:", launchid)
  
  if(!existlaunchid(launchid)){
    return res.status(400).json({
      error:"id doesnt exist"
    })
  }
  const aborted = abortlaunch(launchid)
  return res.status(200).json(aborted)
}
launches.set(launch.flightNumber, launch);
// console.log("🚀 ~ launches:", launches);

export { getalllaunches, addnewLauch, httpAbortlaunch };