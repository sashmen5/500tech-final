import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { StyledPost } from '../../sample/sample';

const stories = storiesOf('Sample', module);
stories.addDecorator(withKnobs);

stories.add('Post', () => (
  <StyledPost>
    <h4>{text('Title', 'Post Title')}</h4>
    <p>{text('Description', 'This is the description')}</p>
  </StyledPost>
));
