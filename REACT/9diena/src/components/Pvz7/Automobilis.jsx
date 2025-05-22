import React from "react";

const Automobilis = ({ auto }) => {
    const { marke, modelis, metai } = auto;
    return <div><h3>{marke} {modelis}</h3></div>;
};

export default Automobilis;
