import React from "react";
import "./singleContent.css";
import { img_200 } from "../../config/imgConfig";
import { Badge } from "@mui/material";
import  no_img from '../../images/noPoster.png'


const SingleContent = (props) => {
  const {  title, poster, vote} = props;

  return (
    <Badge badgeContent={vote || `NR`} color="primary" className="badge">
      <div className="single">
        <img className="poster" src={poster?`${img_200}${poster} `:no_img} alt={title} />
        <div className="title-name">
          <div className="text">{title}</div>
        </div>
      </div>
    </Badge>
  );
};

export default SingleContent;
