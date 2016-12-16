import React from 'react';
import { storiesOf } from '@kadira/storybook';
import KittyCard from './KittyCard';

storiesOf('CaptureView', module)
  .add('Miss Kitty Fantastico', () =>
    <KittyCard {...{ name: 'Miss Kitty Fantastico', _id: 123 }} />,
  );
