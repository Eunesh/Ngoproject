import type { Component } from "solid-js";
import "./Global css/util.css";
import Header from "./Header/Header";

const App: Component = () => {
  return (
    <>
      <Header
        headerTitle1="home"
        headerTitle2="members"
        headerTitle3="About us"
        headerTitle4="adad"
        headerTitle5="sadasd"
      />
      <div>
        <h1 class="container">Hi</h1>
      </div>
    </>
  );
};

export default App;
