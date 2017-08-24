import post from '../api/post'
import {addPostList} from "../action/postAction";
import {addLikeList} from "../action/postAction";
import {connect} from 'react-redux'
import Post from '../component/Post'

export default function getPosts() {
    return dispatch => {
        post.getPosts(posts => {
            dispatch(addPostList(posts))
        })
    }

}


export function addLike(like,postId) {
    return dispatch=>{
        dispatch(addLikeList(like,postId))

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPosts:(posts)=>{
//             dispatch()
//         }
//
//     }
// }


