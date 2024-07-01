import React from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

const DownloadButton = () => {
  const state = useSelector(state => state);

  const handleDownload = () => {
    const serializedState = JSON.stringify(state);
    const blob = new Blob([serializedState], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'redux-state.txt');
  };

  return (
    <button onClick={handleDownload}>Скачать файл</button>
  );
};

export default DownloadButton;
