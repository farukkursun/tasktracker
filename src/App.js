import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  const [goster, setGoster] = useState(true);
  const [buton, setButon] = useState('Close Add Task Bar')
  return (
    <div className="container">
      <div className="header">
        <h2> Task Tracker</h2>
        <button className="btn btn-danger" onClick={() => {setButon(!buton) ; setGoster(!goster)}}>
          {buton ? 'Close Add Task Bar' : 'Show Add Task Bar'}
        </button>
      </div>
      {goster ? <Home /> : <p className="text-center mt-5">No Tasks to Show</p> }
    </div>
  );
};

export default App;
