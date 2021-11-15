import React from "react";
import RoundButton from "./RoundButton";
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
    <div>
      <div className="filter">
        <div className="filter-item">
          <RoundButton
            onClick={() => setFilter(null)}
            text={"clear"}
            fontsize={24}
            filter={""}
          />
        </div>
        {unique &&
          unique.map(
            (doc: any) =>
              doc.name && (
                <div className="filter-item" key={doc.name}>
                  <RoundButton
                    docName={doc.name}
                    onClick={() => setFilter(doc.name)}
                    text={doc.name}
                    fontsize={24}
                    filter={filter}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
}
