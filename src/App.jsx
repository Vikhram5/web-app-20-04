import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengerCount from "./PassengerCount";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PassengerCount />} />
          <Route path="/messages" element={<PassengerCount />} />
          <Route path="/notifications" element={<PassengerCount />} />
  
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
