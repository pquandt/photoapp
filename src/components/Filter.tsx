import React from "react";
import RoundButton from "./RoundButton";
import useFirestore from "../hooks/useFirestore";

export default function Filter() {
  const { docs } = useFirestore("images");

  return (
    <div>
      <div className="filter">
        {docs &&
          docs.map(
            (doc: any) =>
              doc.tag && (
                <div className="filter-item" key={doc.id}>
                  <RoundButton
                    onClick={() => {}}
                    text={doc.tag}
                    fontsize={24}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
}
