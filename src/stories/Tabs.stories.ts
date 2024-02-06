import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../components/';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Tabs',
	component: Tabs,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		elements: [
			{ key: 0, label: 'Tab 1', component: 'Contenido Tab 1' },
			{ key: 1, label: 'Tab 2', component: 'Contenido Tab 2' },
		],
	},
};
