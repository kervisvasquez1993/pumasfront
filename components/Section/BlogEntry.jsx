
import React from "react";

const BlogEntry = ({ title, imageSrc, content }) => {
  return (
    <div className="container-blog">
      <div className="card-blog">
        <div className="img-box">
          <img src={imageSrc} alt="Blog Image" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
