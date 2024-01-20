"use client";

import Button from "@/components/Button";
import ParentDiv from "@/components/ParentDiv";
import RegisterNow from "@/components/RegisterNow";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    } catch (error) {}
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
        <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-8">
          {/** Email Input */}
          <div className="flex flex-col space-y-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <span className="bg-red-100 p-1 text-red-700">{emailError}</span>
            )}
          </div>
          {/** Password Input */}
          <div className="flex flex-col space-y-1">
            <div className="form-div">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <span className="bg-red-100 p-1 text-red-700">
                  {passwordError}
                </span>
              )}
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
