---
to: "<%= useStorybook ? `src/${componentPath}/index.stories.tsx` : null %>"
---

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import <%= componentName %> from "./index";

export default {
  title: "<%= storyTitle %>",
  component: <%= componentName %>,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Children",
    },
  },
} as ComponentMeta<typeof <%= componentName %>>;

const Template: ComponentStory<typeof <%= componentName %>> = args => <<%= componentName %> {...args}>{args.children}</<%= componentName %>>;

export const Basic = Template.bind({});
