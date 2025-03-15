const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer ISI",
  launchDate: new Date("December 30,2030"),
  destination: "Kepler-442 b",
  customer: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
console.log("🚀 ~ launches:", launches)

export default launches;
