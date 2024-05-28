import React from "react";
import "../styles/App.css";
import Title from "./Title";
import GalleryContainer from "./GalleryContainer";

export default function App() {
  return (
    <div className="gallery">
      <Title />
      <GalleryContainer />
    </div>
  );
}
