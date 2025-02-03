import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import NewsList from "./components/NewsDetail";
import NewsDetail from "./components/NewsDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
