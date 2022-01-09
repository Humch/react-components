/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Title from './Title';

describe('Test Title', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Title size="is-1">Text Title</Title>);
    expect(wrapper.length).toEqual(1);
  });

  it('is h2', () => {
    const wrapper = mount(
      <Title size="is-2" headingLevel="h2">
        Text Title
      </Title>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is subtitle', () => {
    const wrapper = mount(
      <Title size="is-1" isSubtitle>
        Text Title
      </Title>
    );

    const title = wrapper.find('h1').hasClass('subtitle');
    expect(title).toBeTruthy();
  });

  it('is spaced', () => {
    const wrapper = mount(
      <Title size="is-1" isSpaced>
        Text Title
      </Title>
    );

    const title = wrapper.find('h1').hasClass('is-spaced');
    expect(title).toBeTruthy();
  });

  it('use paragraph', () => {
    const wrapper = mount(
      <Title size="is-1" useParagraph>
        Text Title
      </Title>
    );

    const title = wrapper.find('p').hasClass('title');
    expect(title).toBeTruthy();
  });
});
