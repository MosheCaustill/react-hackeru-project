import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";

import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";


import { useNavigate,Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";

function SignUpBusiness({redirect="/"}) {
  const [error, setError] = useState("");
  
  const {login, user,createUser} = useAuth();

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
      name: Joi.string().min(2).max(255).required(),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        navigate("/sign-in");
        await login({email:values.email,password:values.password});
        navigate(redirect);
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
            Sign Up As A Business With Real<i className="bi bi-geo-fill"></i>App
          </>
        }
        description={"sign up it's free"}
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
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
          type="text"
          label="Name"
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
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpBusiness;
