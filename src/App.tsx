import React from 'react';
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import {StyledAppContianer} from "./App.styled";
const App = () => {
  return (
    <StyledAppContianer>
      <Header />
      <h1>test</h1>
    </StyledAppContianer>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
