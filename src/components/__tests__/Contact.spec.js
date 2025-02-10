import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

describe('Contact us page test cases', () => {
  test('Shoul load contact component', () => {
    render(<Contact />)

    const heading = screen.getByText(/Contact Us/i) // Case-insensitive search for "Contact Us"
    expect(heading).toBeInTheDocument()
  })

  test('Shoul load button inside contact component', () => {
    render(<Contact />)

    const heading = screen.getByRole('button', { name: /submit/i }) // Case-insensitive search for "Contact Us"
    expect(heading).toBeInTheDocument()
  })
  test('Shoul load input by placeholder inside contact component', () => {
    render(<Contact />)

    const iputName = screen.getByPlaceholderText('Name') // Case-insensitive search for "Contact Us"
    expect(iputName).toBeInTheDocument()
  })
  test('Shoul load 2 input by placeholder inside contact component', () => {
    render(<Contact />)

    const iputName = screen.getAllByRole('textbox') // Case-insensitive search for "Contact Us"
    expect(iputName.length).toBe(3) // Check that there are exactly 2 input fields
    expect(iputName[0]).toBeInTheDocument() // Assert the first input is in the document
    expect(iputName[1]).toBeInTheDocument()
  })
})
