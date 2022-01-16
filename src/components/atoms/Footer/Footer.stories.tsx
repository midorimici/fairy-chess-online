import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '.';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
};

export default Meta;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>&copy; 2022 Midori Mici</>,
};
