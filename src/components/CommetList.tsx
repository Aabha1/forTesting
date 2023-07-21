import React from 'react'

function CommetList(props: any) {
    const { allComments } = props;
    return (
        <div>
            Commet List is here

            {allComments.length === 0 ?
                <h2>No Comments</h2> :
                <ul>
                    {
                        allComments.map((comment: any) => {
                            return <li key={comment.id}>{comment.text}</li>
                        })
                    }
                </ul>
            }

        </div>
    )
}

export default CommetList