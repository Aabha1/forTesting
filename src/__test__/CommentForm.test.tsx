import { fireEvent, render, screen } from '@testing-library/react'
import CommentForm from '../components/CommentForm'
import userEvent from '@testing-library/user-event'

test('Initial Condition', async () => {
    render(<CommentForm />)
    const commentInput = screen.getByRole("textbox")
    expect(commentInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText(/I agree to Terms and Conditions/i)
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button", { name: /comment/i })
    expect(submitButton).toBeDisabled()
})

test('Enable submit button on type and checked', () => {
    render(<CommentForm />)
    const checkbox = screen.getByLabelText(/I agree to Terms and Conditions/i)
    const submitButton = screen.getByRole("button", { name: /comment/i })
    const commetInput = screen.getByPlaceholderText(/write your comment here/i)

    //fireEvent.change(commetInput, { target: { value: "anything not empty" } })
    userEvent.type(commetInput, "anything not empty")

    //fireEvent.click(checkbox)
    userEvent.click(checkbox)

    expect(submitButton).toBeEnabled()
    fireEvent.click(checkbox)
    expect(submitButton).toBeDisabled()
})