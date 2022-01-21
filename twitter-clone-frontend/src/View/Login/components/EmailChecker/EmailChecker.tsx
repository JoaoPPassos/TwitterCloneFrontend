import React from "react";
import { Button, Input, Separator } from "../../../../Components";
import { apiTwitter } from "../../../../Services/api";

import "./style.scss";

interface EmailCheckerProps {
  setter: (email: any) => void;
  handleChecker: () => void;
  email: string;
}

const handleEmailCheck = async (email: string, handle: () => void) => {
  try {
    const response = await apiTwitter.get(`user/${email}`, {});

    handle();
  } catch (error) {
    console.error(error);
  }
};

const EmailChecker = ({ setter, email, handleChecker }: EmailCheckerProps) => {
  return (
    <>
      <div className="EmailChecker_Title">
        <h1>Sign in to Twitter</h1>
      </div>

      <div className="EmailChecker_Button">
        <Button
          text="Sign in with Google"
          icon={
            <img src="https://img.icons8.com/fluency/18/000000/google-logo.png" />
          }
        />
      </div>
      <div className="EmailChecker_Button">
        <Button
          text="Sign in with Apple"
          icon={
            <img src="https://img.icons8.com/ios-glyphs/18/000000/mac-os.png" />
          }
        />
      </div>

      <div className="SeparatorDiv">
        <Separator text="or" />
      </div>
      <div className="EmailChecker_Input">
        <Input onChange={setter} placeholder="Phone, email, or username" />
      </div>
      {/* <Input onChange={setPassword} placeholder="password" /> */}

      <div className="EmailChecker_Button">
        <Button
          text="Next"
          onClick={() => handleEmailCheck(email, handleChecker)}
        />
      </div>
      <div className="EmailChecker_Button">
        <Button
          text="Forgot Password?"
          outline={true}
          //onClick={() => handleEmailCheck(email, handleChecker)}
        />
      </div>
    </>
  );
};

export default EmailChecker;
