import React from 'react';

import './FriendSuggesstion.css';

export default function FriendSuggesstion() {
    // const { img, name } = this.props;
    return (
      <div className="FriendSuggesstion">
        <div className="fs-header">
          <h3> Goi y cho ban </h3>
          <a href="#/">Xem tat ca</a>
        </div>
        <div className="fs-Container">
          <div className="fs-Content">
            <div className="fs-info">
              <a href="#/">
                <img src="https://picsum.photos/50  "></img>
              </a>
              <div className="fs-info-nickName">
                <a href="#/">Elnino09</a>
                <p>Goi y cho ban</p>
              </div>
            </div>
            <a href="#/" className="follow">Theo doi</a>
          </div>
          <div className="fs-Content">
            <div className="fs-info">
              <a href="#/">
                <img src="https://picsum.photos/50"></img>
              </a>
              <div className="fs-info-nickName">
                <a href="#/">Elnino09</a>
                <p>Goi y cho ban</p>
              </div>
            </div>
            <a href="#/" className="follow">Theo doi</a>
          </div>
          <div className="fs-Content">
            <div className="fs-info">
              <a href="#/">
                <img src="https://picsum.photos/50"></img>
              </a>
              <div className="fs-info-nickName">
                <a href="#/">Elnino09</a>
                <p>Goi y cho ban</p>
              </div>
            </div>
            <a href="#/" className="follow">Theo doi</a>
          </div>
        </div>
      </div>
    );
};
