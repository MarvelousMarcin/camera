const getRectFromPoint = (points) => {
  const rects = [];
  points.forEach((point) => {
    const newRec = [
      { x: point.x, y: point.y, z: point.z },
      { x: point.x + 20, y: point.y, z: point.z },
      { x: point.x + 20, y: point.y, z: point.z + 90 },
      { x: point.x, y: point.y, z: point.z + 90 },
      { x: point.x, y: point.y + 40, z: point.z },
      { x: point.x + 20, y: point.y + 40, z: point.z },
      { x: point.x + 20, y: point.y + 40, z: point.z + 90 },
      { x: point.x, y: point.y + 40, z: point.z + 90 },
    ];
    rects.push(newRec);
  });

  return rects;
};

export default getRectFromPoint;
