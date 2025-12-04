const joi = require("joi");

const createSchema = joi.object({
    id: joi.number().required(),
    email: joi.string().min(4).required("Email is required"),
    firstName: joi.string().max(45).required()
});

module.exports = { createSchema }