import React, { useEffect, useState } from "react";
import { Icon, Button } from "../../Components";
import Input from "../../Components/Input";
import { apiTwitter } from "../../Services/api";

import "./styles.scss";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

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
          <div className="Login_Container_Header">
            <div className="Login_Container_Header--close">
              <Icon name="close" />
            </div>
            <div className="Login_Container_Header--Logo">
              <img
                src="https://www.seekpng.com/png/detail/91-917407_vector-twitter-white-icon-png.png"
                alt="Vector - Twitter White Icon Png@seekpng.com"
              />{" "}
            </div>
          </div>

          <h2>Sign in to Twitter</h2>

          <Button
            text="Sign in with Google"
            icon={
              <img src="https://img.icons8.com/fluency/18/000000/google-logo.png" />
            }
          />
          <Button
            text="Sign in with Apple"
            icon={
              <img src="https://img.icons8.com/ios-glyphs/18/000000/mac-os.png" />
            }
          />
          <div>or</div>
          <Input onChange={setEmail} placeholder="email" />
          <Input onChange={setPassword} placeholder="password" />

          <Button text="Next" onClick={handleLogin} />
        </div>
      </div>
    </main>
  );
};

export default Login;
