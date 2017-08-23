import React, { Component } from 'react'
import store from '../redux/store'
import {addLike} from "../action/postAction";
import {connect} from 'react-redux'
class PostBody extends Component{
    // like = () => {
    //     store.dispatch({type:'LIKE',postId:this.props.post._id})
    // }

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

//export default PostBody
export default connect(null,{addLike})(PostBody)