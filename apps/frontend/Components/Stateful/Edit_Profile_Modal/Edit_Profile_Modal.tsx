import Textbox from "@/Components/Inputs/Textbox/Textbox";
import classes from "./Edit_Profile_Modal.module.scss";
import Modal from "react-modal";
import { useState } from "react";
function Edit_Profile_Modal({
  isOpen,
  setIsOpen,
  id,
}: {
  isOpen: boolean;
  setIsOpen: any;
  id: string;
}) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [professions, setProfessions] = useState([]);
  const [contact, setContact] = useState("");
  const [bio, setBio] = useState("");
  const [expirence, setExpirence] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile"
      style={{ content: { zIndex: 300 } }}
      className={classes["modal"]}
    >
      <div className={classes["container"]}>
        <Textbox
          value={firstName}
          placeholder="Enter your email"
          label="Email"
        />
        <Textbox
          value={lastName}
          placeholder="Enter your email"
          label="Email"
        />
        <Textbox value={email} placeholder="Enter your email" label="Email" />
        <Textbox
          value={workplace}
          placeholder="Enter your email"
          label="Email"
        />
        <Textbox
          value={professions.join(",")}
          placeholder="Enter your email"
          label="Email"
        />
        <Textbox value={contact} placeholder="Enter your email" label="Email" />
      </div>
    </Modal>
  );
}

export default Edit_Profile_Modal;
