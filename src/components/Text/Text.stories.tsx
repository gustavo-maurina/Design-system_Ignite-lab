import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
   }
  }
} as Meta<TextProps>

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs'
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Default: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>P tag</p>
    )
  },
  argTypes: {
    children: {
      table : {
        disable: true
      }
    }
  }
}