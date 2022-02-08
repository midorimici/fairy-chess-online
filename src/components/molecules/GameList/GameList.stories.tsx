import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameList } from '.';
import { games } from 'dummies/games';

const Meta: ComponentMeta<typeof GameList> = {
  title: 'Molecules/GameList',
  component: GameList,
};

export default Meta;

const Template: ComponentStory<typeof GameList> = (args) => <GameList {...args} />;

export const Default = Template.bind({});
Default.args = {
  games,
};
