import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import Form from "./auth/login";
import { motion } from "framer-motion";

const Authbutton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [op, setop] = useState(1);

  const login = async (data) => {
    console.log(data);
    const res = await axios.post(
      "https://ppusherfinalbackend.onrender.com/api/login",
      {
        username: data.name,
        password: data.pass,
      }
    );
    console.log(res.data);
    const newdata = JSON.stringify(res.data);
    localStorage.setItem("tokens", newdata);
    console.log("login");
  };

  const singup = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://ppusherfinalbackend.onrender.com/api/register",
        {
          username: data.name,
          password: data.pass,
        }
      );
      console.log(res.data);
      const newdata = JSON.stringify(res.data);
      localStorage.setItem("tokens", newdata);
    } catch (e) {
      console.log("retry the signup");
      console.log(e);
    }
    console.log("singup");
  };

  const title = op == 1 ? "login" : "register";
  const btn = op == 1 ? "register" : "login";

  return (
    <>
      <button
        className="button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        login
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <Form handleSubmit={op == 1 ? login : singup} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setop(!(op == 1))}>{btn}</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Authbutton;
