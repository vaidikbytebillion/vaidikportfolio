import React from "react";
import styles from "../styles/workSpace.module.css";

export const WorkSection = () => {
  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: "15vh" }}>
      <div className={styles.main}>
        <div>Developement</div>
        <div style={{color:'red'}}>X</div>
        <div>Graphics</div>
      </div>
    </div>
  );
};
