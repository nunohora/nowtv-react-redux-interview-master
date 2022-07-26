import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('renders correctly when url provided', () => {
    const wrapper = shallow(<Avatar avatar="http://example.com/example.jpg" fullName="Joe Bloggs" />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        aria-label="User Avatar"
        className="user-avatar-wrapper"
        role="img"
      >
        <img
          alt="Joe Bloggs"
          src="http://example.com/example.jpg"
        />
      </div>
    `);
  });

  it('renders correctly when url not provided', () => {
    const wrapper = shallow(<Avatar avatar={null} fullName="Joe Bloggs" />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        aria-label="User Avatar"
        className="user-avatar-wrapper"
        role="img"
      />
    `);
  });
});
