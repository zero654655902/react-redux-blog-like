import post from '../api/post'
export default function getPosts() {
    return dispatch=>{
        post.getPosts(posts=>{
            dispatch({type:'LOAD_POSTS',posts})
        })
    }

}