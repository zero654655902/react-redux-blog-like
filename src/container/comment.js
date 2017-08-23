import {addCommentList} from "../action/commentAction";

export function addComment({comment,postId}) {
    return dispatch=>{
        dispatch(addCommentList(comment,postId))
    }
}