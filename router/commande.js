const express = require("express");
const commandeRouter = express.Router();
const { validation } = require("../middleware/validateUser");
const isAuth = require("../middleware/isAuth");
const { commandeValidate } = require("../middleware/validateCommande");
const Commande = require("../models/Commande");
commandeRouter.post(
  "/nouvelleCommande",
  commandeValidate(),
  validation,
  async (req, res) => {
    try {
      const commande = new Commande({ ...req.body });
      await commande.save();
      res.status(200).send("Commande cree");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
);

commandeRouter.get("/", validation, async (req, res) => {
  try {
    const commande = await Commande.find({});
    if (commande) {
      res.status(200).send(commande);
    } else {
      res.status(500).send("commande non trouvée");
    }
  } catch (error) {
    res.status(400).send("Commandes non trouvées");
  }
});
commandeRouter.get("/mes_commandes", validation, async (req, res) => {
  const commande = await Commande.findOne({ _id }).populate("createdby");
  if (commande) {
    res.status(200).send(commande);
  } else {
    res.status(500).send("commande non trouvée");
  }
});

commandeRouter.put("/:id", isAuth, async (req, res) => {
  const commande = await Commande.findById(req.params.id);
  if (commande) {
    const updateCommande = await Commande.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).send(updateCommande);
  } else {
    res.status(500).send("commande non trouvée");
  }
});

commandeRouter.delete("/:id", isAuth, async (req, res) => {
  const commande = await Commande.findById(req.params.id);
  if (commande) {
    const deleteCommande = await Commande.findByIdAndDelete();
    res.status(200).send("commande annulée");
  } else {
    res.status(500).send("commande non trouvée");
  }
});

module.exports = commandeRouter;
