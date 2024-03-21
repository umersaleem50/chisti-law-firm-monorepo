"use client";
import Textbox from "@/Components/Inputs/Textbox/Textbox";
import { useState } from "react";
import ImageUplading from "react-images-uploading";
import classes from "./Settings.module.scss";
import ImageFile from "@/Components/Inputs/ImageUploading/ImageUploading";
import { IProfileEduction } from "../Profile_Education/Profile_Education";
export interface ISettings {
  id?: string;
}
function Settings({ id }: ISettings) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [professions, setProfessions] = useState("");
  const [contact, setContact] = useState("");
  const [profilePicture, setProfilePicture] = useState<any>([]);
  const [bio, setBio] = useState("");
  const [gallery, setGallery] = useState([]);
  const [expirenceYear, setExpirenceYear] = useState(0);
  const [expirence, setExpirence] = useState<IProfileEduction[]>([]);

  const onChangeProfilePicture = (
    imageList: Array<any>,
    addUpdateIndex: any
  ) => {
    setProfilePicture(imageList);
  };

  const handleAddCourse = ({
    course,
    start_date,
    description,
    institue,
    end_date,
  }: IProfileEduction) => {
    const newCourse: IProfileEduction = {
      course: course, // You can initialize with default values or leave empty for user input
      start_date: start_date,
      description: description,
      institue: institue,
      // Generate a random ID, you may need to use a better approach
    };
    if (end_date) newCourse["end_date"] = end_date;
    setExpirence([...expirence, newCourse]);
  };

  const handleRemoveCourse = (courseToRemove: string) => {
    const updatedCourses = expirence.filter(
      (course) => course.course !== courseToRemove
    );
    setExpirence(updatedCourses);
  };

  const handleInput = (e: any, setter: any) => {
    setter(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className={classes["container"]} onSubmit={handleOnSubmit}>
      <Textbox
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your firstname"
        label="Firstname"
      />
      <Textbox
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your lastname"
        label="Lastname"
      />
      <Textbox
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        label="Email"
      />
      <Textbox
        value={workplace}
        onChange={(e) => setWorkplace(e.target.value)}
        placeholder="Enter your workplace"
        label="Workplace"
      />
      <Textbox
        value={professions}
        onChange={(e) => setWorkplace(e.target.value)}
        placeholder="Enter your professions. ie Criminal Lawyer, Civil Lawyer"
        label="Professions"
      />
      <Textbox
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter your contact no"
        label="Contact No."
      />
      <Textbox
        placeholder="Enter your bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        isField
        label="Bio"
      />
      <ImageFile
        setImages={setProfilePicture}
        images={profilePicture}
        dataURLKey="profile-picture"
        maxNumber={1}
        maxFileSize={5120}
        acceptType={["jpg", "png"]}
      ></ImageFile>
    </form>
  );
}

export default Settings;
