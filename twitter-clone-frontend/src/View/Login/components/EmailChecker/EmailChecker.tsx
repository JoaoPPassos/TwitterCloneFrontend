import React from "react";
import { Button } from "../../../../Components";
import Input from "../../../../Components/Input";
import { apiTwitter } from "../../../../Services/api";

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
      <Input onChange={setter} placeholder="Phone, email, or username" />
      {/* <Input onChange={setPassword} placeholder="password" /> */}

      <Button
        text="Next"
        onClick={() => handleEmailCheck(email, handleChecker)}
      />
      <Button
        text="Forgot Password?"
        outline={true}
        //onClick={() => handleEmailCheck(email, handleChecker)}
      />
    </>
  );
};

export default EmailChecker;
