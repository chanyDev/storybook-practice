import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button', // 스토리에 보여질 이름
  component: Button, // 스토리에 사용될 컴포넌트
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const BlueButton = Template.bind({});
BlueButton.args = { color: 'blue', children: 'Button' };

export const OrangeButton = Template.bind({});
OrangeButton.args = { color: 'orange' };

export const CherryButton = Template.bind({});
CherryButton.args = { color: 'cherry' };
