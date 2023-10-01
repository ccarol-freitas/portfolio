import React from "react";
import Home from "./pages/home/Home";
import Global from "./ui/styles/global";
import Header from "./pages/home/components/Header/Header";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Home />
    </>
  );
};
export default App;
