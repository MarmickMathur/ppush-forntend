import Modalist from "./modalist";
import { Modal, Button } from "flowbite-react";

const PlayModal = ({ openModal, song, setOpenModal }) => {
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>playlist</Modal.Header>
      <Modal.Body>
        <Modalist song={song} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>I accept</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlayModal;
