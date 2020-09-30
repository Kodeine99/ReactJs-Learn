import React from 'react';
import PropTypes from "prop-types";
import './CreatePost.css';

export default function CreatePost({img}) {
    return (
        <div className="CreatePost">
            <div className="Cs-header">
                <h3>Create Post</h3>
            </div>
            <div className="Cs-content">
                <div className="Cs-content-status">
                    <a href="#/"> {img} </a>
                    <textarea className="Cs-content-textarea" >
                        What's on your mind?
                    </textarea>
                </div>
                <div className="Cs-footer">
                    <a href = "#/">Photo/Video</a>
                    <a href = "#/">Tag your friends</a>
                    <a href = "#/">Feeling/Activity</a>
                </div>
            </div>
        </div>
    )
};
CreatePost.propTypes = {
  img: PropTypes.string.isRequired,
};
