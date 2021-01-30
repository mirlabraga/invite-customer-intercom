const R = 6371;

function getGreatCircleDistance (coordinates)  {

  const { latitude1, longitude1, latitude2, longitude2 } = coordinates;

  const φ1 = getRadians(latitude1);
  const φ2 = getRadians(latitude2);
  const Δλ = getRadians(longitude2) - getRadians(longitude1);

  const distance = Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;
  return Math.round((distance + Number.EPSILON) * 1000) / 1000;
}

const getRadians = coordinate => {
  return (coordinate * Math.PI) / 180;
};

module.exports = {
  getGreatCircleDistance
}
