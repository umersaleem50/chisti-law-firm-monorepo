import Button from "@/Components/Button/Button";
import Typography from "@/Components/Typography/Typography";

const dateTypes = ["createOn", "nextDate", "prevDate"];
const isTypeDate = (date: string) => {
  return dateTypes.includes(date);
};

function ExpandedComponent({ data }: { data: any }) {
  const { _id, __v, ...restData } = data;
  const objectKeys = Object.keys(restData);
  const objectValues = Object.values(restData);

  return (
    <div style={{ padding: "2rem" }}>
      {objectKeys.map((el: any, i: number) => {
        if (isTypeDate(el)) {
          const dateString: string | any = objectValues[i];
          objectValues[i] = new Date(dateString).toDateString();
        }
        return (
          <Typography vairent="p" component="p" key={i}>
            {el + ": " + objectValues[i]}
          </Typography>
        );
      })}

      <Button varient="primary" style={{ marginTop: "1rem" }}>
        Update
      </Button>
      <Button
        varient="outline"
        style={{ marginTop: "1rem", marginLeft: "2rem" }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ExpandedComponent;
