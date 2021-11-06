import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadSection() {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const changeHandle = (e: any) => {
    let selected = e.target.files[0];

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selected && types.includes(selected.type)
      ? (setFile(selected), setError(""))
      : setError("error");
  };

  return (
    <div>
      <section className="uploadSection">
        <form>
          <label>
            <input type="file" onChange={changeHandle} />
            <span>+</span>
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </form>
      </section>
    </div>
  );
}
