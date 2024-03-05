import Image from "next/image";
import classes from "./ButtonImageDrag.module.scss";
function ButtonImageDrag({
  isDragging,
  onImageUpload,
  ...dragProps
}: {
  isDragging: boolean;
  onImageUpload: any;
}) {
  return (
    <button
      className={[
        classes["button"],
        isDragging ? classes["button--dragging"] : "",
      ].join(" ")}
      onClick={onImageUpload}
      {...dragProps}
    >
      <Image src={"/assets/upload_image.png"} fill alt="upload image"></Image>
      Click Me
    </button>
  );
}

export default ButtonImageDrag;
