import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Register from "./pages/Register";
import './App.css';
import { useState, useEffect } from "react";
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      )}

    </>

  );
}

export default App;
