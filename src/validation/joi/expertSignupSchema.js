import Joi from "joi";

const expertSignupSchema = {
  firstName: Joi.string().min(2).max(32).required(),
  lastName: Joi.string().min(2).max(32).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": `"email" must be a valid email address`,
      "any.required": `"email" input is required`,
    }),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d{4,})(?=.*[!@#$%^&*\\-_*]).{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base": `"password" must contain at least capital letter, small letter, 4 digits, at least one special symbol (!@#$%^&*-_*), password must contain at least 8 symbols`,
      "any.required": `"password" input is required`,
    }),
  isExpert: Joi.boolean().required().messages({
    "boolean.base": '"isExpert" must be a boolean',
    "any.required": '"isExpert" is required',
  }),
  specialization: Joi.string().required(),
  bio: Joi.string().required(),
  contactPhone: Joi.string()
    .pattern(
      new RegExp(
        /^\+?\d{1,4}?[-.\s]?(?:\(\d{1,3}\)|\d{1,3})[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      )
    )
    .required()
    .messages({
      "string.pattern.base": `"contactPhone" must be a valid phone number`,
      "any.required": `"contactPhone" property is required`,
    }),
  country: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  houseNum: Joi.number().required(),
};

export default expertSignupSchema;
