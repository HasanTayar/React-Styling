import React, { useState } from "react";
import styled from "styled-components";
import getData from "./Commpents/data";
import Turtels from "./Commpents/TurtleCard/Turtels";

const CardGrid = styled.div`
  display: flex;
  flex-wrap: row;
  justify-content: center;
`;

export default function App() {
  const x = getData();
  return (
    <CardGrid>
        <Turtels/>
    </CardGrid>
  );
}

