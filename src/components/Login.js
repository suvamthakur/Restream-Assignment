import { FcGoogle } from "react-icons/fc";
import facebookIcon from "../assests/facebook-icon.svg";
import logo from "../assests/restream-icon-black.svg";
import { useContext, useRef, useState } from "react";
import { formValidation } from "../utils/formValidation";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { userContext } from "../utils/userContext";

const Login = () => {
  const [isLogin, setIslogin] = useState(true);
  const [error, setError] = useState(null);

  const { setUserData } = useContext(userContext);

  const email = useRef("");
  const password = useRef("");

  const handleSubmit = () => {
    const error = formValidation(email.current.value, password.current.value);

    if (error) {
      setError(error);
      return;
    }

    // IF FORM IS VALID

    // Sign up
    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          // Set user data to show in header
          setUserData({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={logo} alt="" className="restream-logo" />
        <h1>{isLogin ? "Welcome back" : "Create your account"}</h1>

        <button className="google-btn" onClick={() => handleGoogleLogin()}>
          <FcGoogle className="google-icon" />
          <span>Continue With Google</span>
        </button>
        <button
          className="facebook-btn"
          // onClick={() => handleGoogleLogin()}
        >
          <img src={facebookIcon} alt="" className="facebook-icon" />
          <span>Continue With Facebook</span>
        </button>

        <div className="or-text">OR</div>

        <form action="">
          <input
            ref={email}
            type="email"
            className="email-input"
            placeholder="Enter Email"
          />
          <input
            ref={password}
            type="password"
            className="password-input"
            placeholder="Enter Password"
          />

          <p className="error-message">{error}</p>

          <button
            className="login-btn"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {isLogin ? "Log In" : "Sign up"}
          </button>
        </form>

        <div className="login-footer">
          {isLogin ? (
            <>
              <div className="signup-text">
                <span>New to Restream?</span>
                <span className="sign-up" onClick={() => setIslogin(false)}>
                  Sign Up
                </span>
              </div>
              <span className="forgot-pass-text">Forgot password?</span>
            </>
          ) : (
            <p className="login-text">
              Already have an account?{" "}
              <span className="login" onClick={() => setIslogin(true)}>
                Log in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
