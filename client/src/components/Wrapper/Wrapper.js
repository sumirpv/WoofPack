import React from "react";
import "./Wrapper.css";

const Wrapper = ({children }) => (
    <div className="container">
        {children}
    </div>
);

export default Wrapper;