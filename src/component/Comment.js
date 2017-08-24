import React, {Component} from 'react'

import {addComment} from "../container/comment";
import {connect} from 'react-redux'

class CommentBox extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let comment = this.inputForm.value
        let postId = this.props.post._id
        this.props.addComment({comment, postId})
        this.inputForm.value = ''
    }

    render() {
        const itemList = this.props.comments.slice().reverse()
        const commentList = itemList.map((item, index) =>
            (
                <li key={index}>{item.text}</li>
            )
        )
        let commentForm = (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={(text) => this.inputForm = text}/>
                <button type="submit"> submit</button>
            </form>
        )
        return (
            <div>
                {commentForm}
                <ul>
                    {commentList}
                </ul>

            </div>
        )
    }
}

export default connect(null, {addComment})(CommentBox)
//export default CommentBox