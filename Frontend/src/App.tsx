import type { Component } from "solid-js";
import { lazy } from "solid-js";
import "./Global css/util.css";
// import Homepage from "./Pages/Homepage";
// import Gallery from "./Components/Gallery";
import { Router, Route, Routes } from "@solidjs/router";
// import { Members } from "./Pages/Members";

// for lazy loading
const Homepage = lazy(() => import("./Pages/Homepage"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Members = lazy(() => import("./Pages/Members"));

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Homepage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/members" component={Members} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
