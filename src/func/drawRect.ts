import map3Dto2D from "./map3Dto2D";

type DrawRecProp = {
  ctx: CanvasRenderingContext2D;
  rect: [{ x: number; y: number }];
};

const drawRec = (ctx, rect, focal) => {
  const pointArr = [];

  rect.forEach((point) => {
    const dPoint = map3Dto2D(point, focal);
    pointArr.push(dPoint);
  });
  ctx.moveTo(pointArr[0].x, pointArr[0].y);
  for (let i = 0; i < 4; i++) {
    ctx.lineTo(pointArr[i].x, pointArr[i].y);
  }
  ctx.lineTo(pointArr[0].x, pointArr[0].y);
  ctx.stroke();

  ctx.moveTo(pointArr[4].x, pointArr[4].y);
  for (let i = 5; i < 8; i++) {
    ctx.lineTo(pointArr[i].x, pointArr[i].y);
  }
  ctx.lineTo(pointArr[4].x, pointArr[4].y);
  ctx.stroke();

  for (let i = 0; i < 4; i++) {
    ctx.moveTo(pointArr[i].x, pointArr[i].y);
    ctx.lineTo(pointArr[i + 4].x, pointArr[i + 4].y);
    ctx.stroke();
  }

  ctx.stroke();
};

export default drawRec;
