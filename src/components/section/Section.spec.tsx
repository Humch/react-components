/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Section from './Section';

describe('Test Section', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Section>Text Section</Section>);
    expect(wrapper.length).toEqual(1);
  });
});
