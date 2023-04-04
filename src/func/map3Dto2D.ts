type Point = {
  x: number;
  y: number;
  z: number;
};

const map3Dto2D = (point, focal) => {
  let yOk = point.y;
  if (yOk <= 0) {
    yOk = 0.0001;
  }
  const fromFocal = focal / yOk;

  const x = fromFocal * point.x + window.innerWidth / 2;
  const y = window.innerHeight / 2 - fromFocal * point.z;
  return { x, y };
};

export default map3Dto2D;
