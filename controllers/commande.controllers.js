// const Commande = require("../models/Commande");

// //create command
// exports.Ajoutcommande = async (req, res) => {
//   const commande = await Commande.create(req.body);
//   if (commande) {
//     res.status(200).send(commande);
//   } else {
//     res.status(500).send("Order failed");
//   }
// };
// // fetch commandes
// exports.Voircommande = async (req, res) => {
//   const commande = await Commande.find({});
//   if (commande) {
//     res.status(200).send(commande);
//   } else {
//     res.status(500).send("commande non trouvée");
//   }
// };
// //update commande
// exports.UpdateCommande = async (req, res) => {
//   const commande = await Commande.findById(req.params.id);
//   if (commande) {
//     const updateCommande = await Commande.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     res.status(200).send(updateCommande);
//   } else {
//     res.status(500).send("commande non trouvée");
//   }
// };
// //annuler commande
// exports.Deletecommande = async (req, res) => {
//   const commande = await Commande.findById(req.params.id);
//   if (commande) {
//     const deleteCommande = await Commande.findByIdAndDelete();
//     res.status(200).send("commande annulée");
//   } else {
//     res.status(500).send("commande non trouvée");
//   }
// };

// // //annuler commande
// // commandeRouter.delete("/id", isAuth, async (req, res) => {

// //   try {
// //     const commande = await Commande.findByIdAndDelete(req.params.is);
// //     res.status(200).send("commande annulée");
// //   } catch (error) {
// //     res.status(500).send({ errors: [{ msg: "commande non trouvée" }] });
// //   }
// // });
