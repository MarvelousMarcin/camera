import { useEffect, createRef } from "react";
import drawRec from "./func/drawRect";
import translate from "./func/translate";
function Canvas({ setPickPoints, rects, spec }) {
  const canvasRef = createRef<HTMLCanvasElement>();
  let focal = 200;

  const renderer = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    drawRec(ctx, rects, focal, spec);
  };

  const initRender = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, window.innerHeight, window.innerWidth);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    initRender(ctx);
    renderer(ctx);

    window.addEventListener("keydown", (key) => {
      if (key.key === "d") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "right");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "s") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "down");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "a") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "left");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "w") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "up");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "q") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "back");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "e") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "front");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "z") {
        if (focal - 30 > 0) {
          focal -= 30;
        }
      }
      if (key.key === "x") {
        focal += 30;
      }

      if (key.key === "i") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateX_UP");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "k") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateX_DOWN");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "j") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateZ_UP");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "l") {
        const newPositions = [];

        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateZ_DOWN");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "u") {
        const newPositions = [];
        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateY_UP");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      if (key.key === "o") {
        const newPositions = [];
        rects.forEach((rec) => {
          const newRect = [];
          rec.forEach((point) => {
            const newPoint = translate(point, "rotateY_DOWN");
            newRect.push(newPoint);
          });
          newPositions.push(newRect);
        });
        rects = newPositions;
      }

      ctx.beginPath();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      renderer(ctx);
    });
  }, []);

  return (
    <>
      <button
        onClick={() => setPickPoints(true)}
        className="absolute top-10 left-10 font-bold"
      >
        Back
      </button>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      />
    </>
  );
}

export default Canvas;
