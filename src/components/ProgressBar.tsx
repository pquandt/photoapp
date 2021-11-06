import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }: any) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar" style={{ width: progress + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
