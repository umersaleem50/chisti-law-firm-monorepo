"use client";
import { useState } from "react";
import Button, { Back_to_Home_Button } from "../../Button/Button";
import Textbox from "../../Inputs/Textbox/Textbox";
import classes from "./Filter_Tab.module.scss";
import Typography from "../../Typography/Typography";
import Checkbox from "../../Inputs/Checkbox/Checkbox";
import { useRouter } from "next/navigation";

export type IFilterOptions = {
  type: "text" | "button" | "checkbox";
  // optionType: 'button' | 'checkbox';
  text: string;
  isActive?: boolean;
  id: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export interface IFilter {
  heading: string;
  options: IFilterOptions[];
}

const Filter_Tab = ({
  data,
  activeId,
  handleCheckbox,
  isSearchBar = true,
  filter_title = "Filters",
}: {
  data: IFilter[];
  activeId?: string;
  handleCheckbox?: any;
  isSearchBar?: boolean;
  filter_title?: string;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeValue, setActiveValue] = useState(activeId);
  const [isFilterToggle, setIsFilterToggle] = useState(false);

  const generate_options = (optionsArr: IFilterOptions[]) => {
    return optionsArr.map(
      (
        //properties of each Option Obj.
        {
          type,
          id,
          text,
          isActive,
          onClick = (e) => {
            return;
          },
        },
        i
      ) => {
        if (type === "text") {
          return (
            <Typography
              vairent="p"
              component="p"
              key={i}
              customClasses={[classes["container__text"]]}
              color={"var(--color-secondary)"}
            >
              {text}
            </Typography>
          );
        } else if (type === "button") {
          return (
            <Button
              varient="fullwidth"
              onClick={(e: any) => {
                setActiveValue(id);
                onClick(e);
              }}
              key={i}
              id={id}
              isActive={isActive || id === activeValue}
            >
              {text}
            </Button>
          );
        } else {
          return (
            <Checkbox
              text={text}
              isChecked={isActive}
              key={i}
              id={id}
              handleCheckbox={handleCheckbox}
            />
          );
        }
      }
    );
  };

  const generate_filters = (dataArr: IFilter[]) => {
    return dataArr.map((el, i) => {
      return (
        <div className={classes["container"]} key={i}>
          <Typography
            vairent="h5"
            component="h5"
            customClasses={[classes["heading"]]}
          >
            {el.heading}
          </Typography>
          {generate_options(el.options)}
        </div>
      );
    });
  };

  return (
    <form
      className={[
        classes["tab"],
        isFilterToggle ? classes["tab--toggle"] : "",
      ].join(" ")}
    >
      <div className={classes["tab__top"]}>
        <Back_to_Home_Button />
        <Button
          varient="outline"
          onClick={() => setIsFilterToggle((prev) => !prev)}
          customClasses={[classes["button--filter"]]}
        >
          {filter_title}
        </Button>
      </div>
      {isSearchBar && (
        <Textbox
          customClasses={[classes["search"]]}
          type="search"
          placeholder="Search for service"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      )}
      {generate_filters(data)}
    </form>
  );
};
export default Filter_Tab;
