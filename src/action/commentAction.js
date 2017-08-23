
export const addCommentList = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}
