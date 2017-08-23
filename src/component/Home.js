import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 class Home extends Component{
    render(){
        const {posts}=this.props
        let isEmpty=posts.length===0
        let postList=this.props.posts.map((post)=>
        <Link key={post._id} className="post-item" to={`/post/${post._id}`}>{post.title}
        </Link>
        )
        return(
            <div>
                    {isEmpty ? '加载中。。。': postList}
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    posts:state.posts
})

export default connect(mapStateToProps)(Home)