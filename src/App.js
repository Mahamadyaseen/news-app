// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
