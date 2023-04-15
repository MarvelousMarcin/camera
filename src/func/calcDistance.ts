const calcDistance = (point1, point2) => {
  const dis = Math.sqrt(
    Math.pow(point2.x - point1.x, 2) +
      Math.pow(point2.y - point1.y, 2) +
      Math.pow(point2.z - point1.z, 2)
  );
  return dis;
};

export default calcDistance;
