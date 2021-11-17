import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Filter from "./Filter";
import { ReactComponent as AddPhotoBtn } from "../images/addPhotoBtn.svg";
import YellowBtn from "./YellowBtn";

export default function Upload({ setFilter, filter }: any) {
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
      : setError("Pls select jpeg or png");
  };

  const tagBtnClick = (e: any) => {
    e.preventDefault();
    setTag(tagInput);
    setTagInput("");
  };

  return (
    <div>
      <div className="uploadSection">
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && (
            <div className="output-text">
              "{file.name}" is selected. Please give it a tag.
              <input
                type="text"
                placeholder="Type tag here"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <YellowBtn onClick={tagBtnClick} text="Confirm" />
            </div>
          )}

          {!file && !tag && <Filter setFilter={setFilter} filter={filter} />}
        </div>

        <div className="addPhoto">
          <label>
            <AddPhotoBtn className="addPhoto-Btn" />
            <input type="file" onChange={changeHandle} />
          </label>
        </div>
      </div>
      {file && tag && (
        <div className="progressBar">
          <ProgressBar
            file={file}
            setFile={setFile}
            tag={tag}
            setTag={setTag}
          />
        </div>
      )}
    </div>
  );
}
