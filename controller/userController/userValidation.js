const joi = require("joi");

const createSchema = joi.object({
    email: joi.string().min(4).required("Email is required")
});

module.exports = { createSchema }