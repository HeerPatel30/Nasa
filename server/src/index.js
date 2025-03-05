import http from "http";
import app from "./app.js";
import { loadplanets } from "./model/planets.models.js";
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const startserver = async() => {
    await loadplanets()
    server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
};
startserver()
