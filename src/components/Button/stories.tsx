import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>
export const Primary: Story = {
  args: {
    children: 'Button'
  }
}
