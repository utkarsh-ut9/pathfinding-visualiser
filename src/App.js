import "./App.css";
import PathfindingVisualiser from "./PathfindingVisualiser";

function App() {
  return (
    <div className="root">
      <div className="title">
        <h1>Pathfinding Visualiser</h1>
      </div>
      <div className="about">
        <p>Major Project Final Year (BE.B) <br></br>
          Group No. 31 <br></br>
          Group Members: <br></br>
          Utkarsh Rana - 267 <br></br>
          Suraj Tiwari - 260 <br></br>
          Tanish Batham - 264 <br></br>
          Ashish Gupta - 227 <br></br>
        </p>
      </div>
      <PathfindingVisualiser />
    </div>
  );
}

export default App;
