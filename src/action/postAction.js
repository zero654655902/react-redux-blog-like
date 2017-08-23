import post from '../api/post'
export default function getPosts() {
    return dispatch=>{
        post.getPosts(posts=>{
            dispatch({type:'LOAD_POSTS',posts})
        })
    }

}


export function addLike(like,postId) {
    return dispatch=>{
        dispatch({type:'ADD_LIKE',like,postId})

    }
}