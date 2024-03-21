"use client";
import Typography from "@/Components/Typography/Typography";
import classes from "./profile_education.module.scss";
import { useEffect, useState } from "react";

interface expirence {
  course: string;
  start_date?: string | Date | number;
  end_date?: string;
  description: string;
  institue: string;
}

export interface IProfileEduction {
  course: string;
  start_date?: Date | string;
  description: string;
  institue: string;
  end_date?: Date;
}

function formateCourseAndDates({
  course,
  start_date = Date.now(),
  end_date,
}: Partial<expirence>) {
  return `${course}, ${new Date(start_date).toDateString()} - ${
    (end_date && new Date(end_date).toDateString()) || "Present"
  }`;
}

const Expirences = ({
  arr,
  currentActive,
  setCurrentActive,
}: {
  arr: expirence[];
  currentActive: number;
  setCurrentActive: any;
}) => {
  return arr.map((el: expirence, i: number) => {
    return (
      <li
        className={classes["item"]}
        key={i}
        onClick={() => {
          setCurrentActive(i);
        }}
      >
        <div
          className={[
            classes["item__checkbox"],
            i === currentActive && classes["item__checkbox--active"],
          ].join(" ")}
        ></div>
        <Typography vairent="secondary" component="p">
          {/* {formateCourseAndDates({
            course: el.course,
            end_date: el.end_date,
            start_date: el.start_date,
          })} */}
          {el.course}
        </Typography>
      </li>
    );
  });
};

function Expirence_Detail({
  course,
  description,
  institue,
  end_date,
  start_date,
}: Partial<expirence>) {
  return (
    <>
      <Typography vairent="secondary" component="h2">
        {formateCourseAndDates({
          course: course,
          end_date: end_date,
          start_date: start_date,
        })}
      </Typography>
      <Typography
        vairent="p"
        component="p"
        style={{ fontWeight: "bold" }}
        color="var(--color-primary)"
      >
        {institue}
      </Typography>
      <Typography vairent="p" component="p" color="var(--color-accent)">
        {description}
      </Typography>
    </>
  );
}

function Profile_Education({ expirenceArr }: { expirenceArr: expirence[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={classes["container"]}>
      <Typography vairent="secondary" component="h2" color="var(--color-black)">
        {"My Education & Expriences"}
      </Typography>
      <div className={classes["main"]}>
        <div className={classes["main__left"]}>
          <Expirences
            arr={expirenceArr}
            currentActive={active}
            setCurrentActive={setActive}
          />
        </div>
        <div className={classes["main__right"]}>
          <Expirence_Detail
            course={expirenceArr[active]?.course}
            institue={expirenceArr[active]?.institue}
            description={expirenceArr[active]?.description}
            start_date={expirenceArr[active]?.start_date}
            end_date={expirenceArr[active]?.end_date}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile_Education;
