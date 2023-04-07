import React from "react";
import AuthForm from "../../../components/shared/AuthForm/AuthForm";
import Input from "../../../components/shared/Input/Input";

function Register() {
  return (
    <AuthForm
      title="REGISTER"
      linkTitle="Login"
      linkQuestion="Have an account ?"
      link="/"
    >
      <Input type="text" name="username" label="Username" />
      <Input type="email" name="email" label="Email" />
      <Input type="password" name="password" label="Password" />
      <Input
        type="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
      />
    </AuthForm>
  );
}

export default Register;
