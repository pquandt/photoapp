import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile, tag, setTag }: any) => {
  const { url, progress } = useStorage(file, tag);

  useEffect(() => {
    if (url) {
      setFile(null);
      setTag(null);
    }
  }, [url, setFile, setTag]);

  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar" style={{ width: progress + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
