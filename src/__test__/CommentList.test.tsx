import { render, screen } from '@testing-library/react'
import CommetList from '../components/CommetList'

test('comments not available', () => {
    render(<CommetList allComments={[]} />)
    const h2Element = screen.getByText(/no comments/i)
    expect(h2Element).toBeInTheDocument()
})

test('comments are available', () => {
    const com = [
        { id: 1, text: "Happy Diwali" },
        { id: 2, text: "Festival of lights" }
    ]
    render(<CommetList allComments={com} />)

    const h2Element = screen.queryByText(/no comments/i)
    expect(h2Element).not.toBeInTheDocument()

    const comments = screen.getAllByRole('listitem')
    expect(comments.length).toBe(com.length)
})