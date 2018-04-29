import React from "react";

export const Roww = ({ fluid, children }) => (
  <div className="card-panel grey lighten-5 z-depth-1">
   <div className="row valign-wrapper">
    {children}
    </div>
  </div>
);