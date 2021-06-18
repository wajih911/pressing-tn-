// action passer_commande
import {
  PASSER_COMMANDE,
  LOAD_COMMANDE,
  FAIL_COMMANDE,
  CONFIRMER_COMMANDE,
  ANNULER_COMMANDE,
  TROUVER_COMMANDE,
} from "../Constants/pressing";
export const passercommande = (commande) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_COMMANDE });
    let resultat = await axios.post("/api/commande/nouvelleCommande", commande);
    dispatch({ type: PASSER_COMMANDE, payload: resultat.data });
  } catch (error) {
    dispatch({ type: FAIL_COMMANDE, payload: error.response.data });
  }
};
