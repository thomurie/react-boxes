import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./box";
import NewBoxForm from "./newboxform";

const Boxlist = () => {
  const INITALSTATE = {
    height: "",
    width: "",
    color: "",
  };
  const [formData, setFormData] = useState(INITALSTATE);
  const [boxes, setBoxes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const createBox = (e) => {
    e.preventDefault();
    setBoxes((data) => [
      ...data,
      {
        width: formData.width,
        height: formData.height,
        color: formData.color,
        id: uuid(),
      },
    ]);
    setFormData(INITALSTATE);
  };

  const removeSquare = (e) => {
    const copyBoxes = Array.from(boxes);
    const editedBoxes = copyBoxes.filter(
      (box) => box.id !== e.currentTarget.parentNode.id
    );
    setBoxes(editedBoxes);
  };
  return (
    <>
      {boxes.map((b) => (
        <Box
          width={b.width}
          height={b.height}
          color={b.color}
          key={b.id}
          id={b.id}
          removeSquare={removeSquare}
        />
      ))}
      <NewBoxForm
        height={formData.height}
        width={formData.width}
        color={formData.color}
        handleChange={handleChange}
        onSubmit={createBox}
      />
    </>
  );
};

export default Boxlist;
