import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./src/components/NavBar";
import Footer from "./src/components/Footer";
import RestoCards from "./src/components/RestoCards";

const App = () => {
  return (
    <>
      <NavBar />
      <RestoCards />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
