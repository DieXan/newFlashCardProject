import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/main.module.css";
import { Link } from "react-router-dom";

function App() {
  const words = useSelector((state) => state.wordHandler);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOutput, setCurrentOutput] = useState(true);

  const handleIncrementIndex = () => {
    if (currentIndex < Object.keys(words).length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentOutput(true);
    }
  };

  const handleCurrentOutput = () => {
    setCurrentOutput(!currentOutput);
  };

  const handleDecrementIndex = () => {
    if (0 < currentIndex) {
      setCurrentIndex(currentIndex - 1);
      setCurrentOutput(true);
    }
  };

  return (
    <div>
      {Object.keys(words).length === 0 ? (
        <div>
          <h3>Ваш словарь пустой</h3>
          <p>
            Чтобы добавить новые слова, то нажмите{" "}
            <Link to={"/editor"}>сюда</Link> или сделайте экспорт словаря, нажав{" "}
            <Link to={"/load"}>сюда</Link>
          </p>
        </div>
      ) : (
        <div className={styles.App}>
          <button onClick={() => handleDecrementIndex()}>❮</button>
          <div className={styles.appCard} onClick={() => handleCurrentOutput()}>
            {currentOutput
              ? words[currentIndex].word
              : words[currentIndex].mean}
          </div>
          <button onClick={() => handleIncrementIndex()}>❯</button>
        </div>
      )}
    </div>
  );
}

export default App;
