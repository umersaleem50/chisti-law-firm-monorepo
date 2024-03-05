"use client";
import { useRouter } from "next/navigation";
import Filter_Tab, {
  IFilter,
} from "../../../Components/Stateless/Filter_Tab/Filter_Tab";
import classes from "./Dashboard_Filter.module.scss";
const Dashboard_Filter = ({
  handleCheckbox,
  children,
}: {
  handleCheckbox?: any;
  children?: any;
}) => {
  const router = useRouter();
  const filterData: IFilter[] = [
    {
      heading: "Pages: ",
      options: [
        {
          text: "Appointments",
          type: "button",
          id: "appointments",
          onClick: () => {
            router.push("/admin/appointments");
          },
        },
        // {
        //   text: "Manage Team",
        //   type: "button",
        //   // id: "criminal-lawyers",
        //   id: "manage-team",
        //   onClick: () => {
        //     router.push("/admin/manage-team");
        //   },
        // },
        {
          text: "Cases",
          type: "button",
          // id: "criminal-lawyers",
          id: "cases",
          onClick: () => {
            router.push("/admin/cases");
          },
        },
        // {
        //   text: "Blogs",
        //   type: "button",
        //   // id: "cyber-lawyers",
        //   id: "blogs",
        //   onClick: () => {
        //     router.push("/admin/blogs");
        //   },
        // },
        {
          text: "Settings",
          type: "button",
          onClick: () => {
            router.push("/admin/settings");
          },
          // id: "tax-lawyers",
          id: "settings",
        },
      ],
    },
  ];

  return (
    <div className={classes["filters"]}>
      <Filter_Tab
        isSearchBar={false}
        data={filterData}
        handleCheckbox={handleCheckbox}
        filter_title={"Pages"}
      />
      {children}
    </div>
  );
};

export default Dashboard_Filter;
