import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Games } from '.';
import { games } from 'dummies/games';

const Meta: ComponentMeta<typeof Games> = {
  title: 'Templates/Games',
  component: Games,
};

export default Meta;

const Template: ComponentStory<typeof Games> = (args) => <Games {...args} />;

export const Default = Template.bind({});
Default.args = {
  games,
};
