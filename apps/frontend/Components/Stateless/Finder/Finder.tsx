"use client";
import Button from "../../Button/Button";
import Select_Input from "../../Inputs/Select/Select_Input";
import Typography from "../../Typography/Typography";
import { finder_options, finder_text } from "./text";
import { useRouter } from "next/navigation";
import classes from "./Finder.module.scss";
const Finder = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/lawyers");
  };
  return (
    <div className={classes["finder"]}>
      <div className={classes["container"]}>
        <div className={classes["container__details"]}>
          <Typography
            vairent="secondary"
            component="p"
            color="var(--color-white)"
            style={{ marginBottom: "1rem" }}
          >
            {finder_text["secondary"]}
          </Typography>
          <Typography vairent="p" component="p" color="var(--color-white)">
            {finder_text["paragraph"]}
          </Typography>
        </div>
        <div className={classes["container__finder"]}>
          <Select_Input options={finder_options} />
          <Button
            varient="primary"
            text="Find A Lawyer"
            onClick={handleClick}
            customClasses={[classes["button"]]}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Finder;
