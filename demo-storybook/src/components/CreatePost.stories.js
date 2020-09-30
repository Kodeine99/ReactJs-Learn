// CreatePost.stories.jest

import React from 'react';

import CreatePost from './CreatePost';

export default {
    title: 'Create Post',
    component: CreatePost,
};

const Template = (args) => <CreatePost {...args} />;

export const postCreate = Template.bind({});
postCreate.args = {
    Cs: {
        id: '1',
        title: 'Create Post 1',
        img: "",
    }
}


