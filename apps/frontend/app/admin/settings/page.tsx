"use client";
import Change_Password from "@/Components/Layouts/Change-password/Change-Password";
import Settings from "@/Components/Layouts/Settings/Settings";
import axios from "axios";
import { useEffect } from "react";

function Settings_Page() {
  // const accountPayload = sessionStorage.getItem("account");
  // const data = accountPayload && JSON.parse(accountPayload);

  // const fetchProfileData = async () => {
  //   try {
  //     const response = await axios({
  //       url: process.env.NEXT_PUBLIC_API_PATH + "/profile",
  //       method: "get",
  //       withCredentials: true,
  //     });
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchProfileData();
  // }, []);

  return (
    <>
      <Change_Password />
    </>
  );
}

export default Settings_Page;
