import React,{Component} from 'react'
import {Link} from 'react-router-dom'
 class Home extends Component{
    render(){
        const {posts}=this.props
        let isEmpty=posts.length===0
        let postList=this.props.posts.map((post)=>
        <Link key={post._id} to={`/post/${post._id}`}>{post.title}
        </Link>
        )
        return(
            <div>
                    {isEmpty ? '加载中。。。': postList}
            </div>
        )
    }
}

export default Home
