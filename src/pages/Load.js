import UploadComponent from "../components/UploadComponent";
import DownloadButton from "../components/DownloadButton";
import styles from "../styles/load.module.css";

function Load() {
  return (
    <div className={styles.App}>
      <label>
        Импортировать карточки: <UploadComponent />
      </label>
      <label>
        Экспортировать карточки: <DownloadButton />
      </label>
    </div>
  );
}

export default Load;
