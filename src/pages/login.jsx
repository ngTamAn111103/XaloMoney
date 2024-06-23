import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-[#00bc2a] to-[#2de3fd]">
        <div className="container relative left-[calc(50%_-_250px)] top-5 flex w-[500px] flex-col bg-white px-5 py-10">
          <div className="title flex justify-center">Login</div>
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
          
          <Link to={'/signup'} className="forgotPassword mt-5 text-right cursor-pointer">Forgot password?</Link>
          <Button title={"Login"} customClass={"mt-5"} />
        </div>
      </div>
    </>
  );
}
