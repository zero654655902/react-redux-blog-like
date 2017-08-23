import React, { Component } from 'react'
import store from '../redux/store'
class PostBody extends Component{
    like = () => {
        store.dispatch({type:'LIKE',postId:this.props.post._id})
    }

    
    render() {
        const {post,comments}=this.props
        return(
            <div>
                <div onClick={this.like}>
                    {post.like}赞
                </div>
                <div>
                    {comments.length}
                </div>

            </div>

        )
    }
}

export default PostBody
