import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import './App.css';
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Signup from "./pages/signup";
import Login from "./pages/login";
import UserDetails from "./pages/userDetails";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route
                  exact
                  path="/user"
                  element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
                />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/userDetails" element={<UserDetails />} />
              </Route>
            </Routes>
          </Router>
        )
      }

    </>

  );
}

export default App;
