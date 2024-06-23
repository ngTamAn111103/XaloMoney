import React from "react";

import { Button } from "../components/button";
import { Input } from "../components/input";

export default function SignUp() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-[#00bc2a] to-[#2de3fd]">
        <div className="container relative left-[calc(50%_-_250px)] top-5 flex w-[500px] flex-col bg-white px-5 py-10">
          <div className="title flex justify-center">Sign Up</div>
          <div className="form">
            <Input
              htmlFor="username"
              isPassword={false}
              placeholder="Enter your Username"
              textLabel="Username"
              iconClassname="fa-solid fa-user"
              customInput=""
              customLabel="mt-10"
            />
            <Input
              htmlFor="password"
              customLabel="mt-5"
              isPassword={true}
              placeholder="Enter your Password"
              textLabel="Password"
              iconClassname="fa-solid fa-lock"
              customInput=""
            />
          </div>
          <div className="forgotPassword mt-5 text-right">Forgot password?</div>
          <Button title={"Sign Up"} customClass={"mt-5"} />
        </div>
      </div>
    </>
  );
}
