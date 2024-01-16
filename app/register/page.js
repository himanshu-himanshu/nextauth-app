"use client";

import Button from "@/components/Button";
import LoginNow from "@/components/LoginNow";
import ParentDiv from "@/components/ParentDiv";
import React, { useState } from "react";

const Register = () => {
  const [emailError, setEmailError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Fields cannot be empty");
      return;
    }

    try {
      await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
    } catch (error) {}

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
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
