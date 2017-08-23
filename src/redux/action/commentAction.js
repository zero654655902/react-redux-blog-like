export function addComment({comment,postId}) {
    return dispatch=>{
        dispatch({type:'ADD_COMMENT',comment,postId})

    }
}