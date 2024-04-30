import Joi from "joi";

const editUserSchema = {
  firstName: Joi.string().min(2).max(32).required(),
  lastName: Joi.string().min(2).max(32).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": `"email" must be a valid email address`,
      "any.required": `"email" input is required`,
    }),
};

export default editUserSchema;
