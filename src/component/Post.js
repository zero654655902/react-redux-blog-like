import React,{Component} from 'react'
import PostBody from './PostBody'
import CommentBox from './Comment'
import {connect} from 'react-redux'
class Post extends Component{
    render(){
        let {id}=this.props.match.params
        const {allPosts, allComments}=this.props
        let isEmpty= allPosts.length===0||allComments.length===0
        let content
        if(isEmpty){
            content=<div className="loading">加载中。。。。</div>
        }else {
            let comments=allComments.filter(item=>(
                item.post===id
            ))
            let post=allPosts.find(item=>(item._id===id))
            content=(
                <div>
                    <div>
                        <PostBody comments={comments} post={post}/>
                    </div>
                    <div>
                        <CommentBox comments={comments} post={post}/>
                    </div>
                </div>
            )
        }

        return(
            <div>
                {content}
            </div>
        )
    }
}

//export default Post
const mapStateToProps=(state)=>({
    allComments:state.comments,
    allPosts:state.posts
})

export default connect(mapStateToProps)(Post)
