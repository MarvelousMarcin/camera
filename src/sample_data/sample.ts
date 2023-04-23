import calcDistance from "../func/calcDistance";

const getSampleData = () => {
  let rects = [
    [
      { x: 80, y: 100, z: 100 },
      { x: 80 + 30, y: 100, z: 100 },
      { x: 80 + 30, y: 100, z: 100 + 40 },
      { x: 80, y: 100, z: 100 + 40 },
      { x: 80, y: 100 + 40, z: 100 },
      { x: 80 + 30, y: 100 + 40, z: 100 },
      { x: 80 + 30, y: 100 + 40, z: 100 + 40 },
      { x: 80, y: 100 + 40, z: 100 + 40 },
    ],

    [
      { x: 0, y: 100, z: 100 },
      { x: 0 + 30, y: 100, z: 100 },
      { x: 0 + 30, y: 100, z: 100 + 70 },
      { x: 0, y: 100, z: 100 + 70 },
      { x: 0, y: 100 + 40, z: 100 },
      { x: 0 + 30, y: 100 + 40, z: 100 },
      { x: 0 + 30, y: 100 + 40, z: 100 + 70 },
      { x: 0, y: 100 + 40, z: 100 + 70 },
    ],
  ];

  return rects;
};

export default getSampleData;
