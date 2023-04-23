import createRectPoints from "../func/createRectPoints";

const getSpecial = () => {
  let rects = [];

  for (let i = 0; i < 10; i++) {
    rects.push(createRectPoints());
  }

  return rects;
};

export default getSpecial;
