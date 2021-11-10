import React from "react";
import RoundButton from "./RoundButton";
import useFirestore from "../hooks/useFirestore";

export default function Filter() {
  const { docs } = useFirestore("images");

  let array: any = [];
  docs.map((doc: any) => array.push({ name: doc.tag }));
  function getUniqueListBy(array: any, key: any) {
    return [...new Map(array.map((item: any) => [item[key], item])).values()];
  }
  const unique = getUniqueListBy(array, "name");

  return (
    <div>
      <div className="filter">
        {unique &&
          unique.map(
            (doc: any) =>
              doc.name && (
                <div className="filter-item" key={doc.name}>
                  <RoundButton
                    onClick={() => {}}
                    text={doc.name}
                    fontsize={24}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
}
