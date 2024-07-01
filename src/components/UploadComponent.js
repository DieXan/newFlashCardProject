import React from "react";
import { useDispatch } from "react-redux";
import { uploadWords } from "../store/wordSlice";

const UploadComponent = () => {
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const parsedState = JSON.parse(text);
      console.log(parsedState[Object.keys(parsedState)[0]])
      dispatch(uploadWords(parsedState[Object.keys(parsedState)[0]]));
      alert("Успешно")
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadComponent;
