"use client";

import Button from "@/components/Button";
import ParentDiv from "@/components/ParentDiv";
import RegisterNow from "@/components/RegisterNow";
import React from "react";

const Login = () => {
  const handleSubmit = () => {
    console.log("SUBMIT");
  };

  return (
    <ParentDiv>
      {/** Heading */}
      <div className="px-2 pt-2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-700">
          Login
        </h1>
      </div>
      {/** Inputs Container */}
      <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-8 lg:py-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
          {/** Email Input */}
          <div className="flex flex-col space-y-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="form-div">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input"
              />
            </div>
          </div>

          {/** Login/Sign Up Button */}
          <Button title="Login" />

          {/** Sign Up Container */}
          <RegisterNow />
        </form>
      </div>
    </ParentDiv>
  );
};

export default Login;
