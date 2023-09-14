import { useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <div className="w-11/12 m-auto ">
        <Header />
        <div className="main flex gap-4">
          <Courses />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
