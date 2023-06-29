import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";

import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";
import { useCard } from "../hooks/useCard";
import { toast } from "react-toastify";


function CardEdit({ redirect = "/my-cards" }) {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const card = useCard(id);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values ;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        cardsService.updateCard(id, body);
        toast("card edited successfully",{position:toast.POSITION.TOP_CENTER});
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  useEffect(() => {
    if (!card) return;

    const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;
    form.setValues({
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    });
  }, [card]);

  return (
    <>
      <PageHeader
        title={
          <>
            My<i className="bi bi-geo-fill"></i>World Business Card Edit
          </>
        }
        description={"Business Card Edit"}
      ></PageHeader>
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizName")}
          error={form.touched.bizName && form.errors.bizName}
          type="text"
          label="Name"
          required
        ></Input>
        <Input
          {...form.getFieldProps("bizDescription")}
          error={form.touched.bizDescription && form.errors.bizDescription}
          type="text"
          label="Description"
          required
        ></Input>
        <Input
          {...form.getFieldProps("bizAddress")}
          error={form.touched.bizAddress && form.errors.bizAddress}
          type="text"
          label="Address"
          required
        ></Input>
        <Input
          {...form.getFieldProps("bizPhone")}
          error={form.touched.bizPhone && form.errors.bizPhone}
          type="tel"
          label="Phone"
          required
        ></Input>
        <Input
          {...form.getFieldProps("bizImage")}
          error={form.touched.bizImage && form.errors.bizImage}
          type="text"
          label="bizImage"
        ></Input>
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Edit Card
          </button>
        </div>
      </form>
    </>
  );
}

export default CardEdit;
