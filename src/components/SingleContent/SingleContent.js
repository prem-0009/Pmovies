import React from "react";
import "./singleContent.css";
import { img_200 } from "../../config/imgConfig";
import { Badge } from "@mui/material";

const SingleContent = (props) => {
  const { id, title, poster, vote, date } = props;

  return (
    <Badge badgeContent={vote || `NR`} color="primary" className="badge">
      <div className="single">
        <img className="poster" src={`${img_200}${poster}`} alt={title} />
        <div className="title-name">
          <div className="text">{title}</div>
          {/* <span>{date}</span> */}
        </div>
      </div>
    </Badge>
  );
};

export default SingleContent;
