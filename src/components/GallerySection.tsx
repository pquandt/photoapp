import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function GallerySection() {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc: any) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="imagecouldntbefound" />
          </div>
        ))}
    </div>
  );
}
