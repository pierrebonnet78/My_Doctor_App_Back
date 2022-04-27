const express = require("express");
const router = express.Router();
const Joi = require("joi");
const doctorsStore = require("../store/doctors.js");
const validateWith = require("../middleware/validation");

const schema = {
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  seniority: Joi.number().required().min(1),
  secretWord: Joi.string().required(),
  sexe: Joi.object({
    label: Joi.string().required(),
    value: Joi.number().required(),
  }),
};

router.post("/", validateWith(schema), (req, res) => {
  const { seniority, secretWord, sexe, firstname, lastname, email, password } =
    req.body;
  if (doctorsStore.getDoctorByEmail(email))
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });

  const doctor = {
    sexe,
    firstname,
    lastname,
    seniority,
    email,
    password,
    secretWord,
  };
  doctorsStore.addUser(doctor);

  res.status(201).send(doctor);
});

router.get("/", (req, res) => {
  res.send(doctorsStore.getDoctors());
});

module.exports = router;
