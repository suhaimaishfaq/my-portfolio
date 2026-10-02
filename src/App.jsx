import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Weather from "./pages/Weather.jsx";
import Todo from "./pages/Todo.jsx";

function App() {
  const location = useLocation();

  // Scroll back to the top every time the user opens a different page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        {/* Each Route connects a URL path to a page component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
          {/* Any unknown URL goes back to the Home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
