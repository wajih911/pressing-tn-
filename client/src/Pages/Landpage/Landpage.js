import React from "react";
import etapes from "../../assets/etapes.PNG";
import { useDispatch } from "react-redux";
import "./Landpage.css";
import { get } from "mongoose";

const Landpage = () => {
  return (
    <>
      <div className="div_tarifs">
        <h2 className="texte_tarifs">
          Bienvenue chez notre pressing en ligne{" "}
        </h2>
        <br />
        <h6 className="texte_tarif">
          PresingNow Tn est à votre service cher client - Vetements, tapis,
          rideaux, combinaisons et uniformes de travail, PressNow Tn s’occupera
          avec soin 7 jours / 7.
        </h6>
      </div>
      <div className="container">
        <div className="carousel">
          <div className="carousel__face">
            <span>Rapassage</span>
          </div>
          <div className="carousel__face">
            <span>Nettoyage</span>
          </div>
          <div className="carousel__face">
            <span>pressing</span>
          </div>
          <div className="carousel__face">
            <span>Rapassage</span>
          </div>
          <div className="carousel__face">
            <span>Nettoyage</span>
          </div>
          <div className="carousel__face">
            <span>Pressing</span>
          </div>
          <div className="carousel__face">
            <span>Nettoyage</span>
          </div>
          <div className="carousel__face">
            <span>Rapassage</span>
          </div>
          <div className="carousel__face">
            <span>Pressing</span>
          </div>
        </div>
      </div>

      <div className="div_slogan">
        <h2 className="sloganhdeux">Notre service de Pressing en 3 étapes </h2>
        <br />
        <h6 className="texte_tarif">
          Découvrez les etapes à suivre pour passer votre commande en ligne chez
          PressNow Tn
        </h6>
      </div>
      <div className="etapede">
        <img src={etapes} alt="procédure" className="procedure" />
      </div>
    </>
  );
};

export default Landpage;
