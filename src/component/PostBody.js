import React, { Component } from 'react'
import store from '../redux/store'
import {addLike} from "../container/post";
import {connect} from 'react-redux'
class PostBody extends Component{
    like=()=>{
        let postId=this.props.post._id
        let like=this.props.post.like
        this.props.addLike(like,postId)
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

export default connect(null,{addLike})(PostBody)