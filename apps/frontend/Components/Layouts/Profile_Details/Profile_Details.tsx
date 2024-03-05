import Typography from "@/Components/Typography/Typography";
import classes from "./profiledetails.module.scss";
export interface IProfileDetails {
  bio: string;
}
function ProfileDetails({ bio }: IProfileDetails) {
  return (
    <div className={classes["container"]}>
      <Typography component="p" vairent="p" color={"--color-grey-3"}>
        {bio}
      </Typography>
    </div>
  );
}

export default ProfileDetails;
