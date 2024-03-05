"use client";
import Footer from "../../Components/Layouts/Footer/Footer";
import Blogs from "../../Components/Layouts/Blogs/Blogs";
import Team from "../../Components/Layouts/Team/Team";
import Navbar from "../../Components/Stateful/Navbar/navbar";
import Team_Filters from "../../Components/Layouts/Filters/Team_Filters/Team_Filters";
import Lawyers_Results from "@/Components/Layouts/Lawyers_Results/Lawyers_Results";
import { useState } from "react";

const Lawyers = () => {
  const [params, setParams] = useState({});
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleCheckboxChange = (event: any) => {
    // alert("set change handler at lawyers[page.tsx]");
    return;
  };

  return (
    <>
      <Navbar />
      <Team_Filters handleCheckbox={handleCheckboxChange}>
        <Lawyers_Results />
      </Team_Filters>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Lawyers;
