import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { userContext } from "./utils/userContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const navigate = useNavigate();

  const [{ uid, email, photoURL }, setUserData] = useState({
    uid: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
        });

        // If user is logged in
        navigate("/dashboard");
      } else {
        // Sign out
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <userContext.Provider value={{ uid, email, photoURL, setUserData }}>
      <Outlet />
    </userContext.Provider>
  );
}

export default App;
