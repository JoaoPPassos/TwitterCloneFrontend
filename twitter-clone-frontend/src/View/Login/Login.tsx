import React, { useEffect, useState } from "react";
import { Icon, Button } from "../../Components";
import Input from "../../Components/Input";
import { apiTwitter } from "../../Services/api";
import { EmailChecker, InsertCredentials } from "./components";

import "./styles.scss";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailChecked, setEmailChecked] = useState<boolean>(false);

  const handleEmailChecked = () => setEmailChecked(!emailChecked);

  const handleLogin = async () => {
    try {
      const response = await apiTwitter.post("sessions", {
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="Login">
      <div>
        <div className="Login_Container">
          <div className="Login_Container__Header">
            <div className="Login_Container__Header--close">
              <Icon name="close" />
            </div>
            <div className="Login_Container__Header--Logo">
              <img
                src="https://www.seekpng.com/png/detail/91-917407_vector-twitter-white-icon-png.png"
                alt="Vector - Twitter White Icon Png@seekpng.com"
              />{" "}
            </div>
          </div>
          <div className="Login_Container__Body">
            {emailChecked ? (
              <InsertCredentials
                setter={setPassword}
                email={email}
                handleLogin={handleLogin}
              />
            ) : (
              <EmailChecker
                handleChecker={handleEmailChecked}
                setter={setEmail}
                email={email}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
