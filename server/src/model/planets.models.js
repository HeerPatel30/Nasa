const fs = require("fs");
const path = require("path"); // Import path module
const { parse } = require("csv-parse"); // Correct the import

// Define the habitableplanet function to filter the planets
function habitableplanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

const result = [];

// Read and parse the CSV file, filtering based on the habitableplanet function
function loadplanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "/data/kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#", // Correct place for the comment option
          columns: true,
        })
      )
      .on("data", (data) => {
        if (habitableplanet(data)) {
          result.push(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        const name = result.map((planet) => planet["kepler_name"]);
        // console.log(`${result.length} are the survival planets: ${name}`);
        resolve();
      });
  });
}
// creating a promises

// Export the result (habitable planets) if needed
module.exports = {loadplanets ,result};
