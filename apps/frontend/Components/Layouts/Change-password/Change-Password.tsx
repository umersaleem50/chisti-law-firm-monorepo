import Textbox from "@/Components/Inputs/Textbox/Textbox";

import { useState } from "react";
import classes from "./Change-Password.module.scss";
import axios from "axios";
import Button from "@/Components/Button/Button";
import Typography from "@/Components/Typography/Typography";
function Change_Password() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handle_form_submit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        url:
          (process.env.NEXT_PUBLIC_API_PATH || "http://localhost:3000/api/v1") +
          "/auth/change-password",
        method: "POST",
        withCredentials: true,
        data: { password, oldPassword, passwordConfirm },
      });

      if (response.status === 200 || response.statusText === "OK") {
        alert("Password Changed Successfully!");
        handle_clear_fields();
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        return alert(error.response.data?.message);
      }
      alert("Something went wrong!");
    }
  };

  const handle_clear_fields = () => {
    setOldPassword("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <form className={classes["form"]} onSubmit={handle_form_submit}>
      <Typography vairent="h6" component="h6">
        Change Password
      </Typography>
      <Textbox
        placeholder="Enter your current password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        type="password"
      />
      <Textbox
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Textbox
        placeholder="Confirm your password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
      />
      <Button varient="fullwidth" isActive style={{ textAlign: "center" }}>
        Submit
      </Button>
    </form>
  );
}

export default Change_Password;
