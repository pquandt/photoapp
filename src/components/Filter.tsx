import React from "react";
import RoundTag from "./RoundTag";
import useFirestore from "../hooks/useFirestore";
import { FilterProps } from "./Upload";
import Doc from "../types/Doc";

export default function Filter({ setFilter, filter }: FilterProps) {
  const docs = useFirestore("images").docs as Doc[];

  function getUniqueListBy<T>(array: Array<T>, key: keyof T): Array<T> {
    return [...new Map(array.map((item: T) => [item[key], item])).values()];
  }
  const unique = getUniqueListBy(docs, "tag");

  return (
    <div className="filter-wrap">
      <div className="filter">
        {unique &&
          unique.map(
            (doc) =>
              doc.tag && (
                <div className="filter-item" key={doc.tag}>
                  <RoundTag
                    docName={doc.tag}
                    onClick={() => {
                      setFilter(doc.tag);
                    }}
                    text={doc.tag}
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
            setFilter("");
          }}
        >
          X
        </div>
      )}
    </div>
  );
}
