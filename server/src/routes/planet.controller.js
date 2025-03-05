import result from "../model/planets.models.js";


export default async function getallplanet(req, res, next) {
  return res.status(200).json(result);
}
