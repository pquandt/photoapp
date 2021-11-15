import React, { useState } from "react";
import RoundButton from "./RoundButton";
import useDelete from "../hooks/useDelete";
import useEdit from "../hooks/useEdit";

type ModalProps = {
  selectedImg: any;
  setSelectedImg: any;
};

export default function Modal({ selectedImg, setSelectedImg }: ModalProps) {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const deleteData = useDelete(selectedImg, setSelectedImg);
  const [edit, setEdit] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const handleClickTag = useEdit(tagInput, selectedImg, setEdit);

  return (
    <div>
      <div className="backdrop" onClick={handleClick}>
        <img src={selectedImg} alt="big pic" />
        <div className="deleteBtn">
          <RoundButton
            onClick={deleteData}
            text="🗑"
            fontsize={40}
            filter={""}
          />
        </div>
        <div className="editTag">
          <RoundButton
            onClick={() => {
              setEdit(!edit);
            }}
            text="🖉"
            fontsize={40}
            filter={""}
          />
        </div>
        {edit && (
          <div className="changeTag">
            <div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => {
                  setTagInput(e.target.value);
                }}
              />
            </div>
            <div className="changeTag-btn">
              <RoundButton
                onClick={handleClickTag}
                text="Change Tag"
                fontsize={16}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
