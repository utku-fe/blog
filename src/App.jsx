import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div>
      <Header />
      <h1>test</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
