import "./newboxform.css";

const NewBoxForm = ({ width, height, color, onSubmit, handleChange }) => {
  return (
    <div className="NewBoxForm">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            id="width"
            name="width"
            type="text"
            placeholder="100-500"
            value={width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            id="height"
            name="height"
            type="text"
            placeholder="100-500"
            value={height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            id="color"
            name="color"
            type="text"
            placeholder="blue"
            value={color}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
