import React from "react";
import "../App.css";
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

// // variant with classes
// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="gallery">
//         <Title />
//         <GalleryContainer />
//       </div>
//     );
//   }
// }
