import React from "react";

export const Roww = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);