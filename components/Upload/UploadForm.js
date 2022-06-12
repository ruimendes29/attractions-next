import Image from "next/image";
import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./UploadForm.module.css";
import Input from "../UI/Input/Input";
import vercelLogo from "../../public/vercel.svg";
import Button from "../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const UploadForm = (props) => {
  console.log(props.ratio);

  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState({ value: props.ratio, set: false });
  const nameInput = useInput((el) => el.trim() !== "");
  const addressInput = useInput((el) => el.trim() !== "");
  const [uploadedImage, setUploadedImage] = useState(undefined);
  const handleLoadImage = () => {
    const inputForFile = document.getElementById("fileInput");
    inputForFile.click();
  };
  console.log("ratio " + ratio);
  const blobToImage = (blob) => {
    const canvas = document.createElement("canvas");
    const img = document.getElementById("image");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/jpeg");
  };

  const handleSubmit = async () => {
    if (nameInput.isValueValid && addressInput.isValueValid && uploadedImage) {
      setLoading(true);
      await fetch("/api/new-landmark", {
        method: "POST",
        body: JSON.stringify({
          name: nameInput.enteredValue,
          location: addressInput.enteredValue,
          image: blobToImage(uploadedImage),
        }),
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      setSubmit(true);
      setTimeout(() => {
        router.push("/");
      }, 3100);
    }
  };

  return (
    <div className={` ${classes["form-holder"]}`}>
      <div className={`${submit ? classes.submit : ""} shadow ${classes.form}`}>
        <h1>New Landmark</h1>
        <Input
          className={`${classes.ipt}`}
          invalid={nameInput.isInputInvalid}
          onChange={nameInput.valueChanged}
          value={nameInput.enteredValue}
          onBlur={nameInput.touchedHandler}
          type="text"
          name="Name"
          error="Name can not be empty"
        />
        <Input
          className={`${classes.ipt}`}
          invalid={addressInput.isInputInvalid}
          onChange={addressInput.valueChanged}
          value={addressInput.enteredValue}
          onBlur={addressInput.touchedHandler}
          type="text"
          name="Location"
          error="Location can not be empty"
        />

        <div className={`${classes["image-loader"]}`}>
          <Image
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
              if (!isNaN(naturalWidth / naturalHeight) && !ratio.set)
                setRatio({ value: naturalWidth / naturalHeight, set: true });
            }}
            width={400 * ratio.value}
            height={400}
            id="image"
            src={
              uploadedImage ? URL.createObjectURL(uploadedImage) : vercelLogo
            }
            alt="uploaded"
          />

          <input
            onChange={(newImage) => {
              const image = newImage.target.files[0];
              setRatio({ value: 0, set: false });
              setUploadedImage(image);
            }}
            id="fileInput"
            style={{ display: "none" }}
            type="file"
          />
          <Button className={`shadow ${classes.btn}`} onClick={handleLoadImage}>
            Load Image
          </Button>
          <Button className={`shadow ${classes.btn}`} onClick={handleSubmit}>
            {loading ? (
              <FontAwesomeIcon className={`fa-spin`} icon={faCircleNotch} />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
