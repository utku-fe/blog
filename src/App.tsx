import React from "react";
import Header from "./components/Header/Header";
import { StyledAppContianer } from "./App.styled";

const App = ({ children }: { children?: React.ReactNode }) => {
  return <StyledAppContianer>{children}</StyledAppContianer>;
};

export default App;
