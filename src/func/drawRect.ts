import map3Dto2D from "./map3Dto2D";
import calcDistance from "./calcDistance";

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

function getNormal(p1, p2, p3, text) {
  const normal = {
    x: (p2.y - p1.y) * (p3.z - p1.z) - (p2.z - p1.z) * (p3.y - p1.y),
    y: (p2.z - p1.z) * (p3.x - p1.x) - (p2.x - p1.x) * (p3.z - p1.z),
    z: (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x),
  };
  return normal;
}

const drawRec = (ctx, rect, focal) => {
  const orientationFront = getWallOrientation(
    getNormal(rect[0], rect[1], rect[2], "Front"),
    rect[0]
  );

  const orientationBack = getWallOrientation(
    getNormal(rect[4], rect[6], rect[5], "Back"),
    rect[4]
  );

  const orientationLeft = getWallOrientation(
    getNormal(rect[0], rect[3], rect[7], "Left"),
    rect[0]
  );

  const orientationRight = getWallOrientation(
    getNormal(rect[1], rect[5], rect[6], "Right"),
    rect[1]
  );

  const orientationTop = getWallOrientation(
    getNormal(rect[3], rect[6], rect[7], "Top"),
    rect[3]
  );
  const orientationBottom = getWallOrientation(
    getNormal(rect[0], rect[4], rect[5], "Bottom"),
    rect[0]
  );

  const maped = rect.map((point) => map3Dto2D(point, focal));

  const front2d = [maped[0], maped[1], maped[2], maped[3]];

  const back2d = [maped[4], maped[5], maped[6], maped[7]];

  const left2d = [maped[0], maped[3], maped[7], maped[4]];

  const right2d = [maped[1], maped[5], maped[6], maped[2]];

  const bottom2d = [maped[0], maped[4], maped[5], maped[1]];

  const top2d = [maped[3], maped[7], maped[6], maped[2]];

  if (orientationFront == "hidden") {
    // first page
    ctx.beginPath();
    ctx.moveTo(front2d[0].x, front2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(front2d[i].x, front2d[i].y);
    }
    ctx.lineTo(front2d[0].x, front2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationBack == "hidden") {
    // behind page
    ctx.beginPath();
    ctx.moveTo(back2d[0].x, back2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(back2d[i].x, back2d[i].y);
    }
    ctx.lineTo(back2d[0].x, back2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationRight == "hidden") {
    // right page
    ctx.beginPath();
    ctx.moveTo(right2d[0].x, right2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(right2d[i].x, right2d[i].y);
    }
    ctx.lineTo(right2d[0].x, right2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationLeft == "hidden") {
    // left page
    ctx.beginPath();
    ctx.moveTo(left2d[0].x, left2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(left2d[i].x, left2d[i].y);
    }
    ctx.lineTo(left2d[0].x, left2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
  }
  if (orientationTop == "visible") {
    // top page
    ctx.beginPath();
    ctx.moveTo(top2d[0].x, top2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(top2d[i].x, top2d[i].y);
    }
    ctx.lineTo(top2d[0].x, top2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationBottom == "visible") {
    // bottom page
    ctx.beginPath();
    ctx.moveTo(bottom2d[0].x, bottom2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(bottom2d[i].x, bottom2d[i].y);
    }
    ctx.lineTo(bottom2d[0].x, bottom2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationRight == "visible") {
    // right page
    ctx.beginPath();
    ctx.moveTo(right2d[0].x, right2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(right2d[i].x, right2d[i].y);
    }
    ctx.lineTo(right2d[0].x, right2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationLeft == "visible") {
    // left page
    ctx.beginPath();
    ctx.moveTo(left2d[0].x, left2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(left2d[i].x, left2d[i].y);
    }
    ctx.lineTo(left2d[0].x, left2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationFront == "visible") {
    // first page
    ctx.beginPath();
    ctx.moveTo(front2d[0].x, front2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(front2d[i].x, front2d[i].y);
    }
    ctx.lineTo(front2d[0].x, front2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }

  if (orientationBack == "visible") {
    // behind page
    ctx.beginPath();
    ctx.moveTo(back2d[0].x, back2d[0].y);
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(back2d[i].x, back2d[i].y);
    }
    ctx.lineTo(back2d[0].x, back2d[0].y);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
};

export default drawRec;
