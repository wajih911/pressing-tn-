import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { current, updateUser } from "../../Redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import "./Profile.css";
import { getpressings } from "../../Redux/actions/pressing";
import PressingCard from "../PressingCard/PressingCard";
import photoprofile from "../../assets/photoprofile.jpg";
import etapes from "../../assets/etapes.PNG";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user); // on apporte notre utilisateur trouvé dans le userReducer
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState({ name: "", email: "", phone: "" });

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getpressings());
  }, []);

  return (
    <div>
      <Card
        border="light"
        className="profile_component"
        style={{ width: "50rem" }}
      >
        <Card.Header style={{ fontStyle: "oblique" }}>
          Voici vos coordonnées Mr/Mme {user && user.name}
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ fontStyle: "italic" }}>Profile :</Card.Title>
          <img src={photoprofile} className="photoprofile" alt="photoprofile" />
          <Card.Text style={{ fontFamily: "fantasy" }}>
            <h6 style={{ fontFamily: "fantasy", color: "blue" }}>Name :</h6>
            {user && user.name}
          </Card.Text>
          <Card.Text style={{ fontFamily: "fantasy" }}>
            <h6 style={{ fontFamily: "fantasy", color: "blue" }}>Email :</h6>
            {user && user.email}
          </Card.Text>
          <Card.Text style={{ fontFamily: "fantasy" }}>
            <h6 style={{ fontFamily: "fantasy", color: "blue" }}>
              Phone number
            </h6>
            {user && user.phone}
          </Card.Text>
        </Card.Body>
        <>
          <Button
            variant="light"
            style={{ width: "20rem" }}
            className="button_edit"
            onClick={handleShow}
          >
            Modifier profile{" "}
          </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier vos coordonnées</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "white" }}>
              Nom:
              <input
                defaultValue={user.name}
                type="text"
                placeholder="Modifier nom"
                name="name"
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Body style={{ backgroundColor: "white" }}>
              Email:
              <input
                defaultValue={user.email}
                type="text"
                placeholder="Modifier Email"
                name="email"
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Body style={{ backgroundColor: "white" }}>
              Télephone:
              <input
                defaultValue={user.phone}
                type="text"
                placeholder="Modifier Télephone"
                name="phone"
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Body style={{ backgroundColor: "white" }}>
              Mot de passe:
              <input
                type="text"
                placeholder="Modifier mot de passe"
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Footer variant="secondary">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(
                    updateUser(user._id, {
                      role: user.role,
                      _id: user._id,
                      name: update.name,
                      email: update.email,
                      phone: update.phone,
                    })
                  );
                  dispatch(current());
                  handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Card>
      <PressingCard />
      <img src={etapes} className="steps" alt="etapes" />
    </div>
  );
};

export default Profile;
