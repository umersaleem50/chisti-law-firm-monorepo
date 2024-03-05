import Image from "next/image";
import Typography from "../../Typography/Typography";
import classes from "./Lawyer_Card.module.scss";
import { useRouter } from "next/navigation";
export interface ILawyerCard {
  profilePicture: string;
  firstName: string;
  lastName: string;
  professions: string[];
  workplace: string;
  expirenceYears: string | number;
  _id: string;
}
const Lawyer_Card = ({
  profilePicture,
  firstName,
  lastName,
  professions,
  workplace,
  expirenceYears,
  _id,
}: ILawyerCard) => {
  const router = useRouter();
  const handle_details_redirect = () => {
    router.push("/lawyers/" + _id);
  };
  return (
    <figure className={classes["card"]} onClick={handle_details_redirect}>
      <div className={classes["card__image"]}>
        <Image
          src={
            process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL +
            "/assets/profile/small/" +
            profilePicture
          }
          alt="profile-picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <Typography
          vairent="secondary"
          component="h6"
          style={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Advocate, {firstName}
        </Typography>
        <Typography vairent="h5" component="h6">
          {professions?.join(", ")}
        </Typography>
        <Typography
          vairent="p"
          component="p"
          color="var(--color-primary)"
          customClasses={[classes["heading--work"]]}
        >
          {workplace}
        </Typography>
        <Typography
          vairent="p"
          component="p"
          style={{ fontWeight: "bold", marginTop: "auto" }}
          color="var(--color-accent)"
        >
          +{expirenceYears} Years of Expirence
        </Typography>
      </div>
    </figure>
  );
};
export default Lawyer_Card;
