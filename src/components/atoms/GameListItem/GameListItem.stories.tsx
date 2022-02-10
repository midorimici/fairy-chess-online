import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameListItem } from '.';
import { game } from 'dummies/game';

const Meta: ComponentMeta<typeof GameListItem> = {
  title: 'Atoms/GameListItem',
  component: GameListItem,
};

export default Meta;

const Template: ComponentStory<typeof GameListItem> = (args) => <GameListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  game,
};
