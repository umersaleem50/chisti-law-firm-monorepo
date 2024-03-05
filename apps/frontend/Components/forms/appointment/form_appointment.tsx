import { useState } from "react";
import { HiArrowUpRight as IconArrowUpRight } from "react-icons/hi2";
import Typography from "../../Typography/Typography";
import classes from "./form_appointment.module.scss";
import Textbox from "../../Inputs/Textbox/Textbox";
import Button from "../../Button/Button";
import axios from "axios";
const Form_Appointment = ({ customClasses }: { customClasses?: string[] }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handle_clear_fields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setPhone("");
    setAddress("");
    setDescription("");
  };

  const handle_make_appointment = async () => {
    try {
      const response = await axios({
        url:
          (process.env.NEXT_PUBLIC_API_PATH || "http://localhost:3333/api/v1") +
          "/appointments",
        method: "POST",
        data: {
          firstName,
          lastName,
          email,
          phone,
          country,
          address,
          subject: description,
        },
      });
      

      if (response.status === 201 || response.statusText === "Created") {
        alert("Thanks for submitting your request.");
        handle_clear_fields();
      }
    } catch (error) {
     
      alert("Failed to create an appointment. Try again later!");
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    handle_make_appointment();
  };
  return (
    <form
      className={[classes["form"], customClasses].flat().join(" ")}
      onSubmit={submitForm}
    >
      <div className={classes["form__top"]}>
        <Typography
          vairent="secondary"
          component="h6"
          color="var(--color-font)"
        >
          Tell us about your issue.
        </Typography>
        <IconArrowUpRight className={classes["icon"]} />
      </div>
      <div className={classes["container"]}>
        <Textbox
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="Your Firstname"
          placeholder="Enter your firstname"
          required
        />
        <Textbox
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Your Lastname"
          placeholder="Enter your lastname"
          required
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Email"
          placeholder="Enter your email"
          required
        />
        <Textbox
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Your Country"
          placeholder="Enter your country name"
          required
        />
        <Textbox
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="Your Phone No."
          placeholder="Enter your contact no."
          required
        />
        <Textbox
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          label="Your Address"
          placeholder="Enter your address"
          required
        />
        <Textbox
          isField={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Subject Matter"
          placeholder="Explain Subject Matter"
          customClasses={[classes["textarea"]]}
          required
        />
        <Button customClasses={[classes["button"]]} varient="primary">
          submit
        </Button>
      </div>
    </form>
  );
};

export default Form_Appointment;
