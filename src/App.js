import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <section className="animalList">
        <Main />
      </section>
      <Footer />
    </div>
  );
};

export default App;
