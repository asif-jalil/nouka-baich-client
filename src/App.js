import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import UserLayout from "./components/User/UserLayout/UserLayout";
import Login from "./components/Login/Login";
import { createContext, useEffect } from "react";
import { useState } from "react";
import firebase from "firebase/app";
import { useContext } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminLogin from "./components/Login/AdminLogin";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetch("https://salty-journey-40699.herokuapp.com/check-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: currentUser?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(true);
        }
      });
  }, [currentUser?.email]);

  const authContextValue = {
    currentUser,
    setCurrentUser,
    isAdmin,
    setIsAdmin,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        {!loading && (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {isAdmin ? (
              <PrivateRoute path="/dashboard">
                <AdminLayout />
              </PrivateRoute>
            ) : (
              <PrivateRoute path="/dashboard">
                <UserLayout />
              </PrivateRoute>
            )}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin-login">
              <AdminLogin />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
