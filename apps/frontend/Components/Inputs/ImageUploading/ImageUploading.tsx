import ImageUploading from "react-images-uploading";
import ButtonImageDrag from "./ButtonImageDrag";
import Image from "next/image";
import { useState } from "react";
export interface IImageFile {
  images: any;
  setImages: any;
  dataURLKey?: string;
  maxFileSize?: number;
  acceptType?: string[];
  maxNumber?: number;
}
function ImageFile({
  images,
  setImages,
  dataURLKey,
  acceptType,
  maxFileSize,
  maxNumber,
}: IImageFile) {
  const [myImages, setImageList] = useState([]);
  const handleImageChange = (imageList: any, addUpdateIndex: any) => {
    setImageList(imageList);
  };
  return (
    <ImageUploading
      onChange={handleImageChange}
      value={myImages}
      dataURLKey={dataURLKey}
      maxFileSize={maxFileSize}
      acceptType={acceptType}
      maxNumber={maxNumber}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => {
        return (
          <>
            <ButtonImageDrag
              onImageUpload={onImageUpload}
              isDragging={isDragging}
              {...dragProps}
            ></ButtonImageDrag>
            {myImages.map((image, i) => {
              return (
                <Image
                  src={image["data_url"]}
                  width={100}
                  height={100}
                  alt="image"
                  key={i}
                />
              );
            })}
          </>
        );
      }}
    </ImageUploading>
  );
}

export default ImageFile;
