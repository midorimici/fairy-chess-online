import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewRoom } from '.';
import { games } from 'dummies/games';

const Meta: ComponentMeta<typeof NewRoom> = {
  title: 'Templates/NewRoom',
  component: NewRoom,
};

export default Meta;

const Template: ComponentStory<typeof NewRoom> = (args) => <NewRoom {...args} />;

export const Default = Template.bind({});
Default.args = {
  games,
};
