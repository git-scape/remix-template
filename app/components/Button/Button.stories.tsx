import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
//   title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta

type Story = StoryObj<typeof Button>;

export const Default : Story = {
    render: () => <Button>Button</Button>
  };
