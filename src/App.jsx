import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Resetpassword from './component/ResetPassword';




function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyBr4EgOQlmZiV3evHmbNyKmxlUYjX-qWfQ",
    authDomain: "marks-sheet-b7dff.firebaseapp.com",
    projectId: "marks-sheet-b7dff",
    storageBucket: "marks-sheet-b7dff.appspot.com",
    messagingSenderId: "831728571428",
    appId: "1:831728571428:web:6639b399652fc9006334b1",
    measurementId: "G-S4C0H42VYK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("mail sent");
          })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.emailVerified);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">

                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          {/* login emai */}
                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          {/* login password */}
                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div>
                          {/* button for login */}
                          <button type='submit' onClick={signIn} className="btn mt-4">Login</button>
                          {/* for password reset*/}
                          <p className="mb-0 mt-4 text-center"><a href={Resetpassword} className="link">Forgot your password?</a></p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <form onClick={signUp}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            {/* name input */}
                            <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            {/* post input */}
                            <select className="form-style">
                              <option value="option1">Assistance Professor</option>
                              <option value="option2">Class Teacher</option>
                              <option value="option3">Head Of Department</option>
                            </select>
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            {/* gmail input */}
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            {/* password input */}
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div>
                            <button className="btn mt-4" type='submit'>Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
