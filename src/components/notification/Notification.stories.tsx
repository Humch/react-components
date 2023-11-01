import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Notification, { NotificationProps } from './Notification';

export default {
  title: 'Elements/Notification',
  component: Notification,
  args: {},
} as Meta;

const Template: Story<NotificationProps> = (args) => (
  <Notification {...args}>{args.children}</Notification>
);

export const BasicNotification = Template.bind({});
BasicNotification.args = {
  children: 'This is a notification',
};
