"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePick() {
    imageInputRef.current.click();
    console.log("uploaded");
  }

  function handleImageChange(event) {
    const pickedImage = event.target.files[0];

    if (!pickedImage) {
      setPickedImage(null);
      return;
    }

    const filereader = new FileReader();

    filereader.onload = () => {
      setPickedImage(filereader.result);
    };

    filereader.readAsDataURL(pickedImage);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Imagee picked yet</p>}{" "}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
