import React from "react";
import "./App.css";
import StyleContext from "./StyleContext";
import UserInterface from "./UserInterface";

function App() {
  const styling = {
    background: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15,
    margin: ".5rem",
    boxShadow: "0px 0px 8px #1ECD97",
  };

  return (
    <main className="App">
      <StyleContext.Provider value={styling}>
        <h1
          style={{
            textShadow: "2px 2px 10px #1ECD97",
            fontFamily: "Luminari, fantasy",
            fontSize: 60,
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StyleContext.Provider>
    </main>
  );
}

export default App;
