//import types

import {
  PASSER_COMMANDE,
  LOAD_COMMANDE,
  FAIL_COMMANDE,
  CONFIRMER_COMMANDE,
  ANNULER_COMMANDE,
  TROUVER_COMMANDE,
} from "../Constants/pressing";

//initial state
const initilaState = {
  Commandes: [], // redux cest instantané kif naamlou refresh data lkol ydhi3ou adheka 3 lech token n7otouh fi local storage
  load: false,
  errors: null,
};
//pure function => (state , action li feha type w payload sous forme {})
const commandeReducer = (state = initilaState, { type, payload }) => {
  switch (type) {
    case LOAD_COMMANDE:
      return { ...state, load: true };
    // fel payload 3anna objet fih token  w msg w user
    case PASSER_COMMANDE:
      return {
        ...state,
        Commande: payload.commande,
        load: false,
      };

    case FAIL_COMMANDE:
      return { ...state, errors: payload, load: false };

    default:
      return state;
  }
};
export default commandeReducer;
