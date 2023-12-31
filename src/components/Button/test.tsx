import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const text = 'Click'

    render(<Button>{text}</Button>)

    expect(screen.getByText(text)).toBeDefined()
  })
})
