"use client";

import Button from "@/components/Button";
import LoginNow from "@/components/LoginNow";
import ParentDiv from "@/components/ParentDiv";
import React from "react";

const Register = () => {
  const handleSubmit = () => {
    console.log("SUBMIT");
  };

  return (
    <ParentDiv>
      {/** Heading */}
      <div className="px-2 pt-2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-700">
          Register
        </h1>
      </div>
      {/** Inputs Container */}
      <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-6 lg:py-10">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/** Username Input */}
          <div className="flex flex-col space-y-1">
            <input
              type="username"
              id="username"
              placeholder="Username"
              className="input"
            />
          </div>
          {/** Email Input */}
          <div className="flex flex-col space-y-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input"
            />
          </div>
          {/** Password Input */}
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
          <Button title="Register" />

          {/** Login Container */}
          <LoginNow />
        </form>
      </div>
    </ParentDiv>
  );
};

export default Register;
