import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Proximamente..."} />
    </>
  );
}

export default Home;
