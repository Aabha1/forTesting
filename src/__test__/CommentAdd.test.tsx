import { render, screen } from "@testing-library/react"
import App from "../App"
import userEvent from "@testing-library/user-event"

test("comment getting display after submit", () => {
    render(<App />)
    const checkbox = screen.getByLabelText(/I agree to Terms and Conditions/i)
    const submitButton = screen.getByRole("button", { name: /comment/i })
    const commetInput = screen.getByPlaceholderText(/write your comment here/i)

    userEvent.type(commetInput, "say yes to heaven")
    userEvent.click(checkbox)
    userEvent.click(submitButton)

    const commentList = screen.getByText("say yes to heaven")
    expect(commentList).toBeInTheDocument()

})

test("all comments getting display after submit", () => {
    render(<App />)
    const checkbox = screen.getByLabelText(/I agree to Terms and Conditions/i)
    const submitButton = screen.getByRole("button", { name: /comment/i })
    const commetInput = screen.getByPlaceholderText(/write your comment here/i)

    userEvent.type(commetInput, "say yes to heaven")
    userEvent.click(checkbox)
    userEvent.click(submitButton)

    userEvent.type(commetInput, "summertiime sadness")
    userEvent.click(submitButton)

    const commentList = screen.getAllByRole("listitem")
    expect(commentList.length).toBe(4)

})