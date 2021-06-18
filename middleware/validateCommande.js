const { check } = require("express-validator");

exports.commandeValidate = () => [
  check("phone", "Le Numéro est obligatoire").isNumeric(),
  check("adress", "L'Adresse est obligatoire").notEmpty(),
  check(
    "availability_date",
    "La date de disponibilité est obligatoire"
  ).notEmpty(),
];
