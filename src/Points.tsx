const Points = ({ id, x, y, z, setPoint }) => {
  return (
    <article className="flex gap-2">
      <p>X:</p>
      <input
        onChange={(e) =>
          setPoint((prev) => {
            prev[id].x = e.target.value;
            return prev;
          })
        }
        value={x}
        type="number"
        className="border-[3px] outline-none"
      />
      <p>Y:</p>
      <input value={y} type="number" className="border-[3px] outline-none" />
      <p>Z:</p>
      <input value={z} type="number" className="border-[3px] outline-none" />
    </article>
  );
};

export default Points;
