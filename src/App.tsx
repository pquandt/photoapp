import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Top from "./components/Top";
import Upload from "./components/Upload";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("");

  return (
    <div className="App-wrapper">
      <Top />
      <Upload setFilter={setFilter} filter={filter} />
      <Gallery setSelectedImg={setSelectedImg} filter={filter} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
