import React from "react";
import ReactDOM from "react-dom";

import MyApp from "./MyApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <div class="row">
  <div class="column">
    <img src="Queens.jpg" alt="Queens"/>
  </div>
  <div class="column">
    <img src="bronx.jpg" alt="Bronx"/>
  </div>
  <div class="column">
    <img src="manpic.jpg" alt="Manhattan"/>
  </div>
</div> */}
      <MyApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

