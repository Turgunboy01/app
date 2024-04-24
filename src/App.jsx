import React from "react";
import Header from "./container/header/Header";
import Home from "./pages/Home";
import FooterContainer from "./container/footer/FooterContainer";

const App = () => {
  return (
    <div className=" ">
      <Header />
      <Home />
      <FooterContainer />
    </div>
  );
};

export default App;
