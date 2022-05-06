import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameDetails } from '.';
import { game } from 'dummies/game';

const Meta: ComponentMeta<typeof GameDetails> = {
  title: 'Organisms/GameDetails',
  component: GameDetails,
};

export default Meta;

const Template: ComponentStory<typeof GameDetails> = (args) => <GameDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  game,
};
