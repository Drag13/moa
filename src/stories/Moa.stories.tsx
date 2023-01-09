import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Moa } from "../shared/moa/moa";

export default {
  title: "Example/Moa",
  component: Moa,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Moa>;

const Template: ComponentStory<typeof Moa> = (args) => <Moa {...args} />;

export const EmptyValue = Template.bind({});
EmptyValue.args = {
  value: 0,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 10,
};
