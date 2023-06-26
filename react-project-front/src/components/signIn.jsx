import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";

import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";


function SignIn() {
  const [error, setError] = useState("");

  const {login,user} = useAuth();

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onSubmit(values) {
      try {
        await login(values);
        navigate("/");
        toast('thank you for signing in')
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

if(user) {
  return <Navigate to="/"></Navigate>;
}

  return (
    <>
      <PageHeader
        title={
          <>
            Sign In With My <i className="bi bi-globe-europe-africa"></i> World
          </>
        }
        description={"sign in to your account"}
      ></PageHeader>
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
          type="email"
          label="Email"
          required
        ></Input>
        <Input
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
          type="password"
          label="Password"
          required
        ></Input>
        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
