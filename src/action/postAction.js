
export const addPostList = posts =>{
    return{
        type:'LOAD_POSTS',
        posts
    }
}

export const addLikeList =(like,postId)=>{
   return{
       type:'ADD_LIKE',
       like,
       postId
   }
}

