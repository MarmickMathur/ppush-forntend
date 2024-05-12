import Addsongform from "./addsongform";

import { Button, Modal } from "flowbite-react";

const Modalform = ({ setOpenModal, openModal }) => {
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>add new song</Modal.Header>
        <Modal.Body>
          <Addsongform />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modalform;
