import React from "react";
import AuthForm from "../../../components/shared/AuthForm/AuthForm";
import Input from "../../../components/shared/Input/Input";

function Login() {
  return (
    <AuthForm
      title="LOGIN"
      linkTitle="Register"
      linkQuestion="Don't have an account ?"
      link="/register"
    >
      <Input name="username" type="text" label="Username" />
      <Input name="password" type="password" label="Password" />
    </AuthForm>
  );
}

export default Login;
