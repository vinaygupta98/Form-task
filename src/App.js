import React from "react";
import SignUpForm from "./SignUpForm";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          "column",
      }}
    >
      <h1
        style={{
          padding:
            "1rem 0rem",
          textAlign: "center",
        }}
      >
        FORM NO 2
      </h1>
      <SignUpForm />
    </div>
  );
};

export default App;
