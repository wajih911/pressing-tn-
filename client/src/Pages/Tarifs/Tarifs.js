import React from "react";
import tarif from "../../assets/tarif.png";
import etapes from "../../assets/etapes.PNG";
import "./Tarifs.css";

function Tarifs() {
  return (
    <div className="total">
      <div className="div_tarifs">
        <h2 className="texte_tarifs">
          Voici les tarifs de pressing "PressNow Tn"
        </h2>
        <br />
        <h6 className="texte_tarif">
          Voici l'ensemble des prix de nos prestations de repassage, nettoyage,
          teinture et retouche
        </h6>
      </div>
      <div>
        <img
          src={tarif}
          className="tarif"
          alt="tarifs"
          className="tarif_prix"
        />
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="etapede">
        <img src={etapes} alt="procédure" className="procedure" />
      </div>
    </div>
  );
}

export default Tarifs;
