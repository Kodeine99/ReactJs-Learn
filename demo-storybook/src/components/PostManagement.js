import React from "react";
// import PropTypes from "prop-types";

import './PostManagement.css';

export default function PostManagement(){
    return (
      <div className="PostManagement">
        <div className="header">
          <h3>Bai viet</h3>
          <div className="post-option">
            <a href="#/">Bo Loc</a>
            <a href="#/">Quan ly bai viet</a>
          </div>
        </div>
        <div className="post-look">
          <a href="#/">Xem theo danh sach</a>
          <a href="#/">Xem theo danh sach</a>
        </div>
      </div>
    );
};


