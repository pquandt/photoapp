import React, { useState, Dispatch, SetStateAction } from "react";
import RoundTag from "./RoundTag";
import useDelete from "../hooks/useDelete";
import useEdit from "../hooks/useEdit";
import YellowBtn from "./YellowBtn";
import Doc from "../types/Doc";

type ModalProps = {
  selectedImg: Doc;
  setSelectedImg: Dispatch<SetStateAction<Doc | null>>;
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
        <img src={selectedImg.url} alt="big pic" />
        <div className="deleteBtn">
          <YellowBtn onClick={deleteData} text="delete" fontsize={18} />
        </div>
        <div className="editTag">
          <YellowBtn
            onClick={() => {
              setEdit(!edit);
            }}
            text="Edit"
            fontsize={18}
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
              <RoundTag
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
