import map3Dto2D from "./map3Dto2D";

function getWallOrientation(normal, point) {
  const viewerPosition = { x: 0, y: 0, z: 0 };

  const view = {
    x: viewerPosition.x - point.x,
    y: viewerPosition.y - point.y,
    z: viewerPosition.z - point.z,
  };

  // Oblicz iloczyn skalarny wektorów
  const dotProduct = normal.x * view.x + normal.y * view.y + normal.z * view.z;

  // Sprawdź znak iloczynu skalarnego i zwróć odpowiedni wynik
  if (dotProduct > 0) {
    return "visible";
  } else {
    return "hidden";
  }
}

function getNormal(p1, p2, p3) {
  const normal = {
    x: (p2.y - p1.y) * (p3.z - p1.z) - (p2.z - p1.z) * (p3.y - p1.y),
    y: (p2.z - p1.z) * (p3.x - p1.x) - (p2.x - p1.x) * (p3.z - p1.z),
    z: (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x),
  };
  return normal;
}

function normal(a, b, c) {
  const A = [a.x - c.x, a.y - c.y, a.z - c.z];
  const B = [b.x - c.x, b.y - c.y, b.z - c.z];
  const N = [
    A[2] * B[1] - A[1] * B[2],
    A[1] * B[0] - A[0] * B[1],
    A[0] * B[2] - A[2] * B[0],
  ];
  return N;
}

function normal2(a, b, c) {
  const A = [a.x - c.x, a.z - c.z, a.y - c.y];
  const B = [b.x - c.x, b.z - c.z, b.y - c.y];
  const N = [
    A[2] * B[1] - A[1] * B[2],
    A[1] * B[0] - A[0] * B[1],
    A[0] * B[2] - A[2] * B[0],
  ];
  return N;
}

function calc_d(N, c) {
  return N[0] * c.x + N[1] * c.y + N[2] * c.z;
}

function calc_t(N, P, D) {
  return N[0] * P.x + N[1] * P.y + N[2] * P.z - D;
}

function compare_triangles(polygon1, polygon2) {
  let N;
  N = normal(polygon1.points[0], polygon1.points[1], polygon1.points[2]);
  if (polygon1.side === "left") {
    N = normal2(polygon1.points[2], polygon1.points[1], polygon1.points[0]);
  } else if (polygon1.side === "right") {
    N = normal2(polygon1.points[2], polygon1.points[1], polygon1.points[0]);
  } else if (polygon1.side === "top") {
    N = normal2(polygon1.points[0], polygon1.points[1], polygon1.points[2]);
  } else if (polygon1.side === "bottom") {
    N = normal2(polygon1.points[2], polygon1.points[1], polygon1.points[0]);
  } else if (polygon1.side === "front") {
    N = normal2(polygon1.points[2], polygon1.points[1], polygon1.points[0]);
  } else if (polygon1.side === "back") {
    N = normal2(polygon1.points[0], polygon1.points[1], polygon1.points[2]);
  }
  const D = calc_d(N, polygon1.points[2]);

  if (Math.floor(calc_t(N, polygon2.points[0], D)) > 0) {
    return -1;
  }
  if (Math.floor(calc_t(N, polygon2.points[1], D)) > 0) {
    return -1;
  }
  if (Math.floor(calc_t(N, polygon2.points[2], D)) > 0) {
    return -1;
  }

  if (calc_t(N, polygon2.points[2], D) === 0) {
    return (
      getDistance(getPolygonMidpoint(polygon2.points)) -
      getDistance(getPolygonMidpoint(polygon1.points))
    );
  }

  return 1;
}

function getDistance({ x, y, z }) {
  return Math.sqrt(x * x + y * y + z * z);
}

function getPolygonMidpoint(polygon) {
  let numPoints = polygon.length;
  let xSum = 0,
    ySum = 0,
    zSum = 0;

  for (let i = 0; i < numPoints; i++) {
    xSum += polygon[i].x;
    ySum += polygon[i].y;
    zSum += polygon[i].z;
  }

  return { x: xSum / numPoints, y: ySum / numPoints, z: zSum / numPoints };
}

function checkPolygonPosition(polygon1, polygon2) {
  return (
    getDistance(getPolygonMidpoint(polygon2.points)) -
    getDistance(getPolygonMidpoint(polygon1.points))
  );
}

function swapElements(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

const drawRec = (ctx, rects, focal, spec) => {
  let allWalls = [];
  rects.forEach((rect) => {
    const front2d = [rect[0], rect[1], rect[2], rect[3]];

    const back2d = [rect[4], rect[5], rect[6], rect[7]];

    const left2d = [rect[0], rect[3], rect[7], rect[4]];

    const right2d = [rect[1], rect[5], rect[6], rect[2]];

    const bottom2d = [rect[0], rect[4], rect[5], rect[1]];

    const top2d = [rect[3], rect[7], rect[6], rect[2]];

    allWalls.push({ points: front2d, side: "front" });
    allWalls.push({ points: back2d, side: "back" });
    allWalls.push({ points: right2d, side: "right" });
    allWalls.push({ points: bottom2d, side: "bottom" });
    allWalls.push({ points: left2d, side: "left" });
    allWalls.push({ points: top2d, side: "top" });
  });

  for (let i = 0; i < allWalls.length; i++) {
    for (let j = 0; j < allWalls.length; j++) {
      if (compare_triangles(allWalls[i], allWalls[j]) === 1) {
        allWalls = swapElements(allWalls, i, j);
      }
    }
  }
  if (spec) {
    allWalls.sort((obj1, obj2) => {
      return checkPolygonPosition(obj1, obj2);
    });
  }

  allWalls.forEach((wall) => {
    const orientationFront = getWallOrientation(
      getNormal(
        wall.points[0],
        wall.side === "top" || wall.side === "back"
          ? wall.points[2]
          : wall.points[1],
        wall.side === "top" || wall.side === "back"
          ? wall.points[1]
          : wall.points[2]
      ),
      wall.points[0]
    );

    if (orientationFront === "visible") {
      const maped = wall.points.map((point) => map3Dto2D(point, focal));
      ctx.beginPath();
      ctx.moveTo(maped[0].x, maped[0].y);
      for (let i = 1; i < 4; i++) {
        ctx.lineTo(maped[i].x, maped[i].y);
      }
      ctx.lineTo(maped[0].x, maped[0].y);
      ctx.stroke();
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();
    }
  });
};

export default drawRec;
