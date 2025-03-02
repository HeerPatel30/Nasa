const planets = [];

export default async function getallplanet(req, res, next) {
  return res.status(200).json(planets);
}
