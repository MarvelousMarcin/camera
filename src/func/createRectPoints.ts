const createRectPoints = () => {
  const size1 = Math.floor(Math.random() * 400);
  const size2 = Math.floor(Math.random() * 200);
  const size3 = Math.floor(Math.random() * 400);

  return [
    { x: size1, y: size2, z: size3 },
    { x: size1 + 30, y: size2, z: size3 },
    { x: size1 + 30, y: size2, z: size3 + 40 },
    { x: size1, y: size2, z: size3 + 40 },
    { x: size1, y: size2 + 40, z: size3 },
    { x: size1 + 30, y: size2 + 40, z: size3 },
    { x: size1 + 30, y: size2 + 40, z: size3 + 40 },
    { x: size1, y: size2 + 40, z: size3 + 40 },
  ];
};

export default createRectPoints;
