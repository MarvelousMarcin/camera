import { useState } from "react";
import Canvas from "./Canvas";
import PickPoints from "./PickPoints";
import getSampleData from "./sample_data/sample";

const App = () => {
  const [pickPoint, setPickPoints] = useState(true);
  const [rects, setRects] = useState([]);

  return (
    <>
      {pickPoint && (
        <PickPoints setPickPoints={setPickPoints} setRects={setRects} />
      )}
      {!pickPoint && (
        <Canvas rects={rects} setPickPoints={setPickPoints}>
          Test
        </Canvas>
      )}
    </>
  );
};

export default App;
