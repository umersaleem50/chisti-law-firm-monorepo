"use client";
import Image from "next/image";
import { FiArrowUpRight as IconArrow } from "react-icons/fi";
import classes from "./Blog_Card.module.scss";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { useRouter } from "next/navigation";
export interface IBlogCard {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
  heading: string;
  paragraph: string;
  isButtonActive?: boolean;
}
const Blog_Card = ({
  src,
  alt,
  objectFit = "cover",
  heading,
  paragraph,
  isButtonActive = false,
}: IBlogCard) => {
  return (
    <figure className={classes["card"]}>
      <div className={classes["card__image"]}>
        <Image
          src={process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL + "/" + src}
          alt={alt}
          fill
          style={{ objectFit: objectFit }}
        />
      </div>
      <Typography
        vairent="h6"
        component="h6"
        color="var(--color-accent)"
        text={heading}
        customClasses={[classes["text--heading"]]}
      />
      <Typography
        vairent="p"
        component="p"
        color="var(--color-font)"
        text={paragraph}
        customClasses={[classes["text--paragraph"]]}
      />
      <Button
        varient="outline"
        onClick={() => {}}
        text="Read More"
        isActive={isButtonActive}
        modifier="secondary"
        iconEnd={
          <IconArrow
            color="currentColor"
            style={{ marginLeft: ".4rem", transform: "translateY(.3rem)" }}
          />
        }
      />
    </figure>
  );
};

export interface IBlogCardLarge {
  createdOn: string;
  readDuration: string;
  heading: string;
  description: string;
  src: string;
  alt: string;
  slug: string;
}
export function Blog_Card_Large({
  createdOn,
  readDuration,
  heading,
  description,
  src,
  alt,
  slug,
}: IBlogCardLarge) {
  const router = useRouter();
  const handle_blog_redirect = () => {
    router.push("/blogs/" + slug);
  };
  return (
    <figure className={classes["large"]} onClick={handle_blog_redirect}>
      <div className={classes["large__image"]}>
        <Image
          src={process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL + "/" + src}
          fill
          alt={alt}
          style={{ objectFit: "cover" }}
        />
      </div>
      <caption className={classes["right"]}>
        <div className={classes["right__top"]}>
          <Typography
            vairent="p"
            color="var(--color-font)"
            component="p"
            style={{ fontWeight: "bold" }}
          >
            {new Date(createdOn).toDateString()}
          </Typography>
          <Typography
            vairent="p"
            color="var(--color-secondary)"
            component="p"
            style={{ fontWeight: "bold" }}
          >
            {readDuration}
          </Typography>
        </div>
        <div className={classes["right__container"]}>
          <Typography vairent="h6" component="h6" color="var(--color-black)">
            {heading}
          </Typography>
          <Typography vairent="p" component="p" color="var(--color-grey-3)">
            {description}
          </Typography>
        </div>
      </caption>
    </figure>
  );
}

export default Blog_Card;
