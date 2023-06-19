import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import image from "../../public/image.svg";
export const HomeSection = () => {
  return (
    <>
      <div className={styles.backgroundImage}>
        <Image src={image} alt="My Image" width={500} height={500} />
      </div>

      <div style={{ height: "100vh" }} className={styles.homeSection}>
        <div style={{ fontSize: "50px" }}>
          Hi, I am <span style={{ color: "red" }}>V</span>AIDIK
        </div>
        <div><u style={{fontSize:'20px',marginTop:'0'}}>Indore,India</u></div>
        <div>
          <div>Developer</div>
          <div>Developer</div>
          <div></div>
        </div>
      </div>
    </>
  );
};
