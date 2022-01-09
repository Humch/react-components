/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import * as HelpStories from '../help/Help.stories';

import InputField, { InputFieldProps } from './InputField';

export default {
  title: 'InputField',
  component: InputField,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<InputFieldProps> = (args) => (
  <InputField {...args}>{args.children}</InputField>
);

export const BasicInputField = Template.bind({});
BasicInputField.args = {
  name: 'input',
  label: 'Input Field',
};

export const RoundedInputField = Template.bind({});
RoundedInputField.args = {
  ...BasicInputField.args,
  inputProps: { isRounded: true },
};

export const InputFieldWithHelper = Template.bind({});
InputFieldWithHelper.args = {
  ...BasicInputField.args,
  children: <HelpStories.BasicHelp {...HelpStories.BasicHelp.args} />,
};

export const InputFieldWithIcons = Template.bind({});
InputFieldWithIcons.args = {
  ...BasicInputField.args,
  icons: {
    leftIcon: <FontAwesomeIcon icon={faMailBulk} />,
    rightIcon: <FontAwesomeIcon icon={faCheck} />,
  },
};

export const InputFieldWithIconsClickable = Template.bind({});
InputFieldWithIconsClickable.args = {
  ...BasicInputField.args,
  icons: {
    leftIcon: <FontAwesomeIcon icon={faMailBulk} />,
    rightIcon: <FontAwesomeIcon icon={faCheck} />,
    handleLeftIconClick: () => {
      // eslint-disable-next-line no-alert
      alert('top');
    },
    handleRightIconClick: () => {},
  },
};
