import React, { ReactNode } from "react";
import { Button } from "../../../../Components";
import Input from "../../../../Components/Input";

import "./styles.scss";
interface CredentialsProps {
  email: string;
  setter: (password: any) => void;
  handleLogin: () => void;
}

const InsertCredentials = ({
  setter,
  email,
  handleLogin,
  ...props
}: CredentialsProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="InsertCredentials">
      <h1 className="InsertCredentials_Title">Enter your password</h1>

      <div className="InsertCredentials_Inputs">
        <Input placeholder={email} readonly={true} key="email" />
        <Input
          onChange={setter}
          placeholder={"Password"}
          password={true}
          key="password"
        />
      </div>

      <div className="InsertCredentials_Button">
        <Button text="Log in" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default InsertCredentials;
