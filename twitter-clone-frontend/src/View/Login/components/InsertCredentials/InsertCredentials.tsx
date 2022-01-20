import React, { ReactNode } from "react";
import { Button } from "../../../../Components";
import Input from "../../../../Components/Input";

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
    <div {...props}>
      <h2>Enter your password</h2>

      <Input placeholder={email} readonly={true} />
      <Input onChange={setter} placeholder={"Password"} />

      <Button text="Log in" onClick={handleLogin} />
    </div>
  );
};

export default InsertCredentials;
