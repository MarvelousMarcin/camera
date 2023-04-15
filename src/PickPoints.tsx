import getSampleData from "./sample_data/sample";
import fot from "./assets/camera.png";
import getSpecial from "./sample_data/special";
import getSimple from "./sample_data/simple";
import { useState } from "react";
import { motion } from "framer-motion";
import getRectFromPoint from "./sample_data/getRectFromPoint";

const PickPoints = ({ setRects, setPickPoints }) => {
  const [pickOwnPoint, setPickOwnPoint] = useState(false);
  const [input, setInput] = useState("");

  const parseInput = () => {
    const points = input.split(",").map((point) => {
      const pointValue = point.split(" ");
      return {
        x: Number(pointValue[0]),
        y: Number(pointValue[1]),
        z: Number(pointValue[2]),
      };
    });
    const rects = getRectFromPoint(points);
    setRects(rects);
    setPickPoints(false);
  };

  return (
    <section className="p-10 flex justify-center flex-col items-center h-screen">
      <article className="text-center flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold ">Perspective Camera</h1>
        <p className="text-xl text-[#333333]">Marcin Maciąg</p>
      </article>
      <section className="flex flex-col justify-center items-center mt-20 gap-10">
        {pickOwnPoint && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white  w-[60rem] rounded-xl h-[40rem] translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]"
          >
            <button onClick={() => setPickOwnPoint(false)}>Back</button>
            <section className="flex justify-between">
              <h1 className="font-bold text-3xl">Pick points</h1>

              <button
                onClick={() => parseInput()}
                className="text-white bg-black font-bold w-[20%] h-[2rem]"
              >
                Show
              </button>
            </section>

            <section className="mt-10 gap-4 flex flex-col h-[70%] overflow-y-scroll">
              <textarea
                onChange={(e) => setInput(e.target.value)}
                className="h-[30rem]"
                placeholder="Enter points this way: x y z,x y z"
              ></textarea>
            </section>
          </motion.section>
        )}
        <h1 className="text-3xl font-bold">Options</h1>

        <button
          className="text-xl"
          onClick={() => {
            setRects(getSampleData());
            setPickPoints(false);
          }}
        >
          Get sample view
        </button>
        <button
          className="text-xl"
          onClick={() => {
            setRects(getSpecial());
            setPickPoints(false);
          }}
        >
          Get special look
        </button>

        <button
          className="text-xl"
          onClick={() => {
            setRects(getSampleData());
            setPickOwnPoint(true);
          }}
        >
          Pick point by yourself
        </button>
        <img className="w-24" src={fot} />
      </section>
    </section>
  );
};

export default PickPoints;
