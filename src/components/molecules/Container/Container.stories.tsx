import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from '.';

const Meta: ComponentMeta<typeof Container> = {
  title: 'Molecules/Container',
  component: Container,
};

export default Meta;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>Main contents</p>,
};
