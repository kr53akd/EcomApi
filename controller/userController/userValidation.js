const joi = require("joi");

const createSchema = joi.object({
    email: joi.string().min(4).required().email().messages({
        "string.empty":"Email is required", 
        "string.min":"Email should be atleast 4 character long",
        "string.email":"Please enter a valid email address"
    }),
    firstName: joi.string().max(45).required()
});

const loginSchema = joi.object({
    email: joi.string().required().email().messages({
        "string.empty":"Email is required",
        "string.email":"Please enter a valid email address"
    }),
    password: joi.string().required().messages({
        "string.empty":"Password is required"
    })
});

module.exports = { createSchema, loginSchema }