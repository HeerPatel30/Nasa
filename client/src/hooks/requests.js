const API_URL = "http://localhost:8000";

// Load planets and return as JSON.
async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    if (!response.ok) {
      throw new Error(`Failed to fetch planets: ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return []; // Return empty array in case of error
  }
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    if (!response.ok) {
      throw new Error(`Failed to fetch launches: ${response.statusText}`);
    }
    const fetchedLaunches = await response.json();
    return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
  } catch (err) {
    console.error(err);
    return []; // Return empty array in case of error
  }
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  // try {
  //   const response = await fetch(`${API_URL}/launches`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(launch),
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Failed to submit launch: ${response.statusText}`);
  //   }
  //   return await response.json(); // assuming the server responds with the launch data
  // } catch (err) {
  //   console.error(err);
  //   return { ok: false }; // Return failure response
  // }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  // try {
  //   const response = await fetch(`${API_URL}/launches/${id}`, {
  //     method: "DELETE",
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Failed to delete launch: ${response.statusText}`);
  //   }
  //   return { ok: true };
  // } catch (err) {
  //   console.error(err);
  //   return { ok: false };
  // }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
