import { useState } from "react";
import Canvas from "./Canvas";
import PickPoints from "./PickPoints";

const App = () => {
  const [pickPoint, setPickPoints] = useState(true);
  const [rects, setRects] = useState([]);
  const [spec, setSpec] = useState(false);

  return (
    <>
      {pickPoint && (
        <PickPoints
          setPickPoints={setPickPoints}
          setRects={setRects}
          setSpec={setSpec}
        />
      )}
      {!pickPoint && (
        <Canvas spec={spec} rects={rects} setPickPoints={setPickPoints}>
          Test
        </Canvas>
      )}
    </>
  );
};

export default App;
