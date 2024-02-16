import React from "react";
import Header from "../common/Header";
import { LoginForm } from "./LoginForm";

const LoginWrapper = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginWrapper;
