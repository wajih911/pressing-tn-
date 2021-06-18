import React from "react";
import "./PressingCard.css";
import { Card, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import cleanpress from "../../assets/cleanpress.jpg";
import { useState } from "react";

const PressingCard = () => {
  const pressing = useSelector((state) => state.pressingReducer.Pressing);
  console.log(pressing);
  // const Commande = useSelector((state) => state.commandeReducer.Commandes);
  const [com, setCom] = useState({
    ClientName: "",
    ClientPhone: "",
    number_of_parts: "",
    availability_date: "",
    adress: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setCom({ ...com, [e.target.name]: e.target.value });
  };
  return (
    <div className="pressinglist">
      {pressing.map((e) => (
        <Card className="pressingCard">
          <Card.Img
            variant="top"
            src={cleanpress}
            className="PressingImg"
            alt="pressings"
          />
          <Card.Body>
            <Card.Title
              style={{ textAlign: "center", fontFamily: "monospace" }}
            >
              {e.name}
            </Card.Title>
            <Card.Text>
              <h6 style={{ fontFamily: "fantasy", color: "blue" }}>
                Pressing Email :
              </h6>
              {e.email}
            </Card.Text>
            <Card.Text>
              <h6 style={{ fontFamily: "fantasy", color: "blue" }}>
                Pressing Adress :
              </h6>
              {e.adresse}
            </Card.Text>
            <Card.Text>
              <h6 style={{ fontFamily: "fantasy", color: "blue" }}>
                Horaire :
              </h6>
              {e.horaire}
            </Card.Text>
            <Card.Text>
              {" "}
              <h6 style={{ fontFamily: "fantasy", color: "blue" }}>
                Pressing phone :
              </h6>
              {e.phone}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={handleShow}>
              Passer commande
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Passer commande</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "white" }}>
                Nom :<input type="text" placeholder="Nom"></input>
              </Modal.Body>
              <Modal.Body style={{ backgroundColor: "white" }}>
                Télephone: <input type="text" placeholder="Télephone"></input>
              </Modal.Body>
              <Modal.Body style={{ backgroundColor: "white" }}>
                Nombre de piéces:
                <input type="text" placeholder="Nombre de piéces"></input>
              </Modal.Body>
              <Modal.Body style={{ backgroundColor: "white" }}>
                date et heure de disponibilité:
                <input
                  type="date"
                  placeholder="date et heure de disponibilité"
                ></input>
              </Modal.Body>
              <Modal.Body style={{ backgroundColor: "white" }}>
                Adresse:<input type="text" placeholder="adresse"></input>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default PressingCard;
