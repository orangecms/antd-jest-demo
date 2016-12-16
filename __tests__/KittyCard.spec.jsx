// rendering utils
import React from 'react';
import { mount } from 'enzyme';
// the component we're testing :)
import KittyCard from '../src/components/KittyCard/KittyCard';
// unmock the component we're testing
jest.unmock('../src/components/KittyCard/KittyCard');
// dummy
const kitty = { _id: 123, name: 'Miss Kitty Fantastico' };
// the actual suite
describe('KittyCard', () => {
  it('shows the number of the cat', () => {
    const kittyCard = mount(<KittyCard {...kitty} />);
    expect(kittyCard.text()).toMatch(/is cat #123/);
  });

  it('shows the name of the cat', () => {
    const kittyCard = mount(<KittyCard {...kitty} />);
    expect(kittyCard.text()).toMatch(/Miss Kitty Fantastico/);
  });
});
