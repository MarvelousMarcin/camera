import { matrix } from "mathjs";

type Points = {
  x: number;
  y: number;
  z: number;
  size: number;
};

const getTwoPoint = (points: Points) => {
  const pointOne = matrix([points.x, points.y, points.z]);
  const pointTwo = matrix([
    points.x + points.size,
    points.y + points.size,
    points.z + points.size,
  ]);

  return [pointOne, pointTwo];
};

export default getTwoPoint;
