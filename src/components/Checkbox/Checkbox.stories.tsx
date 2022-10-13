import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { Text } from "../Text/Text";
import { Checkbox } from "./Checkbox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me for 30 days</Text>
        </div>
      )
    }
  ]
}

export const Default = {}
