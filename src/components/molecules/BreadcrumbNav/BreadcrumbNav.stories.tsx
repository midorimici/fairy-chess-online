import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { BreadcrumbNav } from '.';
import { items } from 'dummies/breadcrumbItems';

const Meta: ComponentMeta<typeof BreadcrumbNav> = {
  title: 'Molecules/BreadcrumbNav',
  component: BreadcrumbNav,
};

export default Meta;

const Template: ComponentStory<typeof BreadcrumbNav> = (args) => <BreadcrumbNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
};
