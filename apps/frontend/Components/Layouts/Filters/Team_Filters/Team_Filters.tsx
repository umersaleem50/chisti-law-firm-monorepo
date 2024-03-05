
import Filter_Tab, {
  IFilter,
} from "../../../../Components/Stateless/Filter_Tab/Filter_Tab";
import classes from "./Team_Filters.module.scss";
const Team_Filters = ({
  handleCheckbox,
  children,
}: {
  handleCheckbox?: any;
  children?: any;
}) => {
  const filterData: IFilter[] = [
    {
      heading: "Filters: ",
      options: [
        {
          text: "By Profession",
          type: "text",
          id: "heading",
        },
        {
          text: "Civil Lawyers",
          type: "checkbox",
          id: "profession",
        },
        {
          text: "Criminal Lawyers",
          type: "checkbox",
          // id: "criminal-lawyers",
          id: "profession",
        },
        {
          text: "Cyber Lawyers",
          type: "checkbox",
          // id: "cyber-lawyers",
          id: "profession",
        },
        {
          text: "Tax Lawyers",
          type: "checkbox",
          // id: "tax-lawyers",
          id: "profession",
        },
        {
          text: "By Expirence",
          type: "text",
          id: "heading",
        },
        {
          text: "+3 Years",
          type: "checkbox",
          // id: "3-years",
          id: "expirence",
        },
        {
          text: "+5 Years",
          type: "checkbox",
          // id: "5-years",
          id: "expirence",
        },
        {
          text: "+10 Years",
          type: "checkbox",
          // id: "10-years",
          id: "expirence",
        },
      ],
    },
  ];

  return (
    <div className={classes["filters"]}>
      <Filter_Tab data={filterData} handleCheckbox={handleCheckbox} />
      {children}
    </div>
  );
};

export default Team_Filters;
