import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Common from "./view/pages/CommonPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<Common />} />
      </Routes>
    </Router>
  );
}

export default App;
