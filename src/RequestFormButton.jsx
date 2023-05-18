import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function RequestFormButton() {
  const styling = useContext(StyleContext);

  return (
    <div>
      <button style={styling}>
        Click Here!
      </button>
      <input style={styling} type="submit" value="Submit" />

    </div>
  );
}