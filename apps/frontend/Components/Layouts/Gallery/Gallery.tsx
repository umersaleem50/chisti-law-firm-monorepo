"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import classes from "./Gallery.module.scss";
import Typography from "@/Components/Typography/Typography";

export interface IGalleryItem {
  src: string;
}

export interface IGallery {
  images: IGalleryItem[];
  title?: string;
}

function GalleryItems({
  images,
  setActive,
}: {
  images: IGalleryItem[];
  setActive: any;
}) {
  const ref = useRef();

  return (
    <>
      {images.map((el, i) => {
        return (
          <div
            className={classes["item"]}
            key={i}
            onClick={() => setActive(i - 1)}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL +
                `/assets/gallery/small/${el}`
              }
              alt={`Gallery Image ${i++}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </>
  );
}

function Gallery({ images, title = "Gallery" }: IGallery) {
  const [active, setActive] = useState(0);

  return (
    <>
      <Typography
        vairent="secondary"
        component="h5"
        color="var(--color-black)"
        style={{ marginBottom: "4rem" }}
      >
        {title}
      </Typography>
      <div className={classes["container"]}>
        <div className={classes["container__main"]}>
          <Image
            src={
              process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL +
              `/assets/gallery/large/${images[active]}`
            }
            alt={"image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={classes["container__other"]}>
          <GalleryItems images={images} setActive={setActive} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
