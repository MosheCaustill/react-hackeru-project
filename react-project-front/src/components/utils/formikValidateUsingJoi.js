import Joi from "joi";

function formikValidateUsingJoi(formikValidationSchema) {
    return function validate(values) {
        const schema = Joi.object(formikValidationSchema);
  
        const { error } = schema.validate(values, { abortEarly: false });
  
        if (!error) {
          return null;
        }
  
        const errors = {};
        for (const detail of error.details) {
          const errorKey = detail.path[0];
          errors[errorKey] = detail.message;
        }
        return errors;
      }
}

export default formikValidateUsingJoi