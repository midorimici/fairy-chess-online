import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Game } from '.';
import { game } from 'dummies/game';

const Meta: ComponentMeta<typeof Game> = {
  title: 'Templates/Game',
  component: Game,
};

export default Meta;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  game,
};
