import {addCommentList} from "../action/commentAction";
import {connect} from 'react-redux'
import CommentBox from '../component/Comment'

export function addComment({comment,postId}) {
    return dispatch=>{
        dispatch(addCommentList(comment,postId))
    }
}


// const mapDispatchToProps=(dispatch)=>{
//     return{
//         addComment:(comment,postId)=>{
//             dispatch(addCommentList(comment,postId))
//         }
//     }
//
// }
// export default connect(mapDispatchToProps)(CommentBox)


