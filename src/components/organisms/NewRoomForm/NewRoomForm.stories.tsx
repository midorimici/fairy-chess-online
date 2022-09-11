import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewRoomForm } from '.';
import { games } from 'dummies/games';

const Meta: ComponentMeta<typeof NewRoomForm> = {
  title: 'Organisms/NewRoomForm',
  component: NewRoomForm,
};

export default Meta;

const Template: ComponentStory<typeof NewRoomForm> = (args) => <NewRoomForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  games,
};
