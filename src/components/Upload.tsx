import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Filter from "./Filter";

export default function UploadSection({ setFilterStatus }: any) {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tag, setTag] = useState("");

  const types = ["image/png", "image/jpeg"];

  const changeHandle = (e: any) => {
    let selected = e.target.files[0];

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selected && types.includes(selected.type)
      ? (setFile(selected), setError(""))
      : setError("error");
  };

  const tagBtnClick = (e: any) => {
    e.preventDefault();
    setTag(tagInput);
    setTagInput("");
  };

  return (
    <div>
      <div className="uploadSection">
        <form>
          <input
            type="text"
            placeholder="tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <button type="submit" onClick={tagBtnClick}>
            ok
          </button>
          <label>
            <input type="file" onChange={changeHandle} />
            <span>+</span>
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && (
              <div className="output-text">
                {file.name} selected
                <p>Please also set tag and press "ok"</p>
              </div>
            )}
            {file && tag && (
              <ProgressBar
                file={file}
                setFile={setFile}
                tag={tag}
                setTag={setTag}
              />
            )}
          </div>
          <Filter setFilterStatus={setFilterStatus} />
        </form>
      </div>
    </div>
  );
}
