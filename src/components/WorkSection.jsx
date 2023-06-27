import React, { useState } from "react";
import styles from "../styles/workSpace.module.css";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import RedCard from "./Card";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const developementWork = [
  {
    titile: "",
    description: "",
    startDate: "",
    technology: "",
    details: "",
  },
];

const designWork = [
  {
    titile: "",
    description: "",
    startDate: "",
    technology: "",
    details: "",
  },
];

const designTechnology =[
  {
    technology :'AutoDesk SketchBook'
  },
  {
    technology :'Canva'
  },
  {
    technology :'Infinite Design'
  },
  {
    technology :'Adobe Draw'
  },
  
]

const developmentTechnology =[
  {
    technology :'React js'
  },
  {
    technology :'Next js'
  },
  {
    technology :'Express js'
  },
  {
    technology :'Node js'
  },
  {
    technology :'git/Github'
  },
  {
    technology :'MongoDb'
  },
  {
    technology :'Postman'
  },
  {
    technology :'Jira'
  }
  
]


export const WorkSection = () => {
  const [expanded, setexpanded] = useState(false);
  const [expandedGraphics,setexpandedGraphics] = useState(false)

  return (
    <div style={{ width: "100%", paddingTop: "15vh" }}>
      <hr />
      <div className={styles.main}>
        <div>
          Developement
          <ExpandMore
            expand={expanded}
            onClick={() => setexpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
        <div style={{ color: "red" }}>X</div>
        <div>Graphics
        <ExpandMore
            expand={expandedGraphics}
            onClick={() => setexpandedGraphics(!expandedGraphics)}
            aria-expanded={expandedGraphics}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          re
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <RedCard />
          </Collapse>
        </div>
        <div>
          au
          <Collapse in={expandedGraphics} timeout="auto" unmountOnExit>
            <RedCard />
          </Collapse>
        </div>
      </div>
    </div>
  );
};
