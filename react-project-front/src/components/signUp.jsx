import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";

import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";

import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";

import CheckBox from "./common/checkBox";
import { toast } from "react-toastify";

function SignUp({ redirect = "/" }) {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login, user, createUser } = useAuth();

  const passwordRegex =
    /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){4,})(?=.*[@#$%^&+!=])(?=.{8,}).*$/;

  const passwordRequirments =
    "Password must contain at least 8 chars, including 1 uppercase & 1 lowercase letters, 4 numbers and 1 special sign @#$%^&+!=";

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      name: "",
      password: "",
      biz: false,
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
        .regex(passwordRegex)
        .label("Password")
        .messages({ "string.pattern.base": passwordRequirments }),
      name: Joi.string().min(2).max(255).required().label("Name"),
      biz: Joi.boolean(),
    }),
    async onSubmit(values) {
      try {
        await createUser(values);
        await login({ email: values.email, password: values.password });
        navigate(redirect);
        toast("thank you for joining us",{position:toast.POSITION.TOP_CENTER})
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <PageHeader
        title={
          <>
            Sign Up With My <i className="bi bi-globe-europe-africa"></i> World
          </>
        }
        description={"sign up it's free"}
      ></PageHeader>
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <CheckBox
          {...form.getFieldProps("biz")}
          label="Business Sign-Up"
          error={form.touched.email && form.errors.email}
          type="checkbox"
        ></CheckBox>
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

export default SignUp;
