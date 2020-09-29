// PostManagement.stories.js

import React from 'react';
import PostManagement from './PostManagement';

// This default export determines where your story goes in the story list
export default {
  title: 'Post Management',
  component: PostManagement,
};

const Template = (args) => <PostManagement {...args} />;

export const Post = Template.bind({});

Post.args = {
/* the args you need here will depend on your component */
  post: {
    id: '1',
    title: 'Post Management 1',
    updateAt: new Date(),
  }
};
