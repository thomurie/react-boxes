import "./box.css";

const Box = ({
  color = "orange",
  width = "200",
  height = "200",
  id,
  removeSquare,
}) => {
  return (
    <div
      data-testid={color}
      id={id}
      className="Box"
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <button className="Box" onClick={removeSquare}>
        X
      </button>
    </div>
  );
};

export default Box;
