/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('Test ProgressBar', () => {
  it('Mount ProgressBar', () => {
    const wrapper = mount(<ProgressBar />);
    expect(wrapper.length).toEqual(1);
  });

  it('ProgressBar is small', () => {
    const wrapper = mount(<ProgressBar size="is-small" />);

    const progressBar = wrapper.find('.progress').hasClass('is-small');
    expect(progressBar).toBeTruthy();
  });

  it('ProgressBar is primary', () => {
    const wrapper = mount(<ProgressBar color="is-primary" />);

    const progressBar = wrapper.find('.progress').hasClass('is-primary');
    expect(progressBar).toBeTruthy();
  });

  it('ProgressBar max is set', () => {
    const max = 200;
    const wrapper = mount(<ProgressBar max={max} />);

    const progressBarMax = wrapper.prop('max');
    expect(progressBarMax).toEqual(200);
  });
});
