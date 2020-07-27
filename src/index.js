// import the react & reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create react component
const App = () => {
  const buttonText = "Click me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// take react component & show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
