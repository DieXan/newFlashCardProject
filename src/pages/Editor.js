import { useDispatch } from "react-redux";
import { addWord } from "../store/wordSlice";
import { useState } from "react";
import styles from "../styles/editor.module.css"

function Editor() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");

  const handleAddWord = () => {
    dispatch(
      addWord({
        word: word,
        mean: mean,
      })
    );
  };

  return (
    <div className={styles.App}>
      <input
        type="text"
        onChange={(e) => setWord(e.currentTarget.value)}
        placeholder="Термин..."
      />{" "}
      <input
        type="text"
        onChange={(e) => setMean(e.currentTarget.value)}
        placeholder="Объяснение термина..."
      />{" "}
      <button
        id="addButton"
        onClick={() => handleAddWord()}
        type="button"
      >
        Добавить
      </button>
    </div>
  );
}

export default Editor;
