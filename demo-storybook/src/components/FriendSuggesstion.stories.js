//FriendSuggesstion.stories.js

import React from 'react';
// import PropTypes from "prop-types";

import FriendSuggesstion from './FriendSuggesstion';

export default {
    title: 'Friend Suggesstion',
    component: FriendSuggesstion,
};

const Template = (args) => <FriendSuggesstion {...args} />;

export const Suggesstion = Template.bind({});

Suggesstion.args = {
    Fs: {
        id: '1',
        title: 'Friend Suggesstion',
    }
};

// FriendSuggesstion.defaultProps = {
//   img: "img",
// };

// FriendSuggesstion.propTypes = {
//   img: PropTypes.string,
//   name: PropTypes.string.isRequired,
// };
