import { matrix, multiply, cos, sin, unit } from "mathjs";

const translate = (point, dir) => {
  const translateSize = 10;
  const normalize = matrix([point.x, point.y, point.z, 1]);

  if (dir === "right") {
    const vector = matrix([
      [1, 0, 0, -translateSize],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "left") {
    const vector = matrix([
      [1, 0, 0, translateSize],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "down") {
    const vector = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, translateSize],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "up") {
    const vector = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, -translateSize],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "back") {
    const vector = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, translateSize],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "front") {
    const vector = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, -translateSize],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateX_UP") {
    const rot = unit(5, "deg");

    const vector = matrix([
      [1, 0, 0, 0],
      [0, cos(rot), -sin(rot), 0],
      [0, sin(rot), cos(rot), 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateX_DOWN") {
    const rot = unit(-5, "deg");

    const vector = matrix([
      [1, 0, 0, 0],
      [0, cos(rot), -sin(rot), 0],
      [0, sin(rot), cos(rot), 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateZ_UP") {
    const rot = unit(5, "deg");

    const vector = matrix([
      [cos(rot), 0, sin(rot), 0],
      [0, 1, 0, 0],
      [-sin(rot), 0, cos(rot), 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateZ_DOWN") {
    const rot = unit(-5, "deg");

    const vector = matrix([
      [cos(rot), 0, sin(rot), 0],
      [0, 1, 0, 0],
      [-sin(rot), 0, cos(rot), 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateY_UP") {
    const rot = unit(5, "deg");

    const vector = matrix([
      [cos(rot), -sin(rot), 0, 0],
      [sin(rot), cos(rot), 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }

  if (dir === "rotateY_DOWN") {
    const rot = unit(-5, "deg");

    const vector = matrix([
      [cos(rot), -sin(rot), 0, 0],
      [sin(rot), cos(rot), 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    const result = multiply(vector, normalize).toArray();
    return { x: result[0], y: result[1], z: result[2] };
  }
};

export default translate;
