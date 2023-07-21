import React, { useState } from 'react'

function CommentForm() {
    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false)
    const changeHandler = (e: any) => {
        e.preventDefault();
    }

    return (
        <div style={{ display: "block" }}>
            <h1>A comment form</h1>
            <input
                placeholder='Write your comment here'
                value={text}
                onChange={e => setText(e.target.value)}
                style={{ display: "block", width: "50%" }}
            />
            <input
                type="checkbox"
                id="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
            />
            <label htmlFor='checkbox'>
                I agree to Terms and Conditions
            </label>
            <button
                disabled={!checked || !text}
                onClick={changeHandler}
                style={{ display: "block" }}
            >
                Comment
            </button>
        </div>
    )
}

export default CommentForm