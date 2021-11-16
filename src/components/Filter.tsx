import React from "react";
import RoundTag from "./RoundTag";
import useFirestore from "../hooks/useFirestore";

export default function Filter({ setFilter, filter }: any) {
  const { docs } = useFirestore("images");

  let array: any[] = [];
  docs.map((doc: any) => array.push({ name: doc.tag }));
  function getUniqueListBy(array: any, key: any) {
    return [...new Map(array.map((item: any) => [item[key], item])).values()];
  }
  const unique = getUniqueListBy(array, "name");

  return (
    <div className="filter-wrap">
      <div className="filter">
        {unique &&
          unique.map(
            (doc: any) =>
              doc.name && (
                <div className="filter-item" key={doc.name}>
                  <RoundTag
                    docName={doc.name}
                    onClick={() => {
                      setFilter(doc.name);
                    }}
                    text={doc.name}
                    fontsize={16}
                    filter={filter}
                  />
                </div>
              )
          )}
      </div>
      <div className="photocount"></div>
      {filter && (
        <div
          className="x"
          onClick={() => {
            setFilter(null);
          }}
        >
          X
        </div>
      )}
    </div>
  );
}
