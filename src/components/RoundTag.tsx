import React from "react";
import TextButton from "../types/TextButton";

export default function RoundTag({
  text,
  onClick,
  fontsize,
  filter,
  docName,
}: TextButton) {
  return (
    <div
      className={filter === docName ? "RoundTag-active" : "RoundTag"}
      onClick={onClick}
      style={{ fontSize: fontsize }}
    >
      {text}
    </div>
  );
}
