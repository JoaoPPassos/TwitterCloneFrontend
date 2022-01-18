import React from "react";
import { Icon, Button } from "../../Components";

import "./styles.scss";

const Login = () => {
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

          <Button text="Sign in with Google" />
        </div>
      </div>
    </main>
  );
};

export default Login;
