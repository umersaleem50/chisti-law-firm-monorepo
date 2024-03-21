import Button from "@/Components/Button/Button";
import Typography from "@/Components/Typography/Typography";

function Team_Manager_Expendable({ setIsOpen }: { setIsOpen: any }) {
  const handle_toggle_model = () => {
    setIsOpen(true);
  };

  const Expendable = ({ data }: { data: any }) => {
    const { _id, __v, ...restData } = data;
    const objectKeys = Object.keys(restData);
    const objectValues = Object.values(restData);

    return (
      <div style={{ padding: "2rem" }}>
        {objectKeys.map((el: any, i: number) => {
          if (el === "createdOn") {
            const dateString: string | any = objectValues[i];
            objectValues[i] = new Date(dateString).toDateString();
          }
          return (
            <Typography vairent="p" component="p" key={i}>
              {el + ": " + objectValues[i]}
            </Typography>
          );
        })}
        <Button onClick={handle_toggle_model} varient="outline">
          Update Profile
        </Button>
      </div>
    );
  };
  return Expendable;
}

export default Team_Manager_Expendable;
