import getSampleData from "./sample_data/sample";
import fot from "./assets/camera.png";
import getSpecial from "./sample_data/special";
import getSimple from "./sample_data/simple";

const PickPoints = ({ setRects, setPickPoints }) => {
  return (
    <section className="p-10 flex justify-center flex-col items-center h-screen">
      <article className="text-center flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold ">Perspective Camera</h1>
        <p className="text-xl text-[#333333]">Marcin Maciąg</p>
      </article>
      <section className="flex flex-col justify-center items-center mt-20 gap-10">
        <h1 className="text-3xl font-bold">Options</h1>
        <button
          className="text-xl"
          onClick={() => {
            setRects(getSimple());
            setPickPoints(false);
          }}
        >
          Simple View
        </button>
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
            setPickPoints(false);
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
