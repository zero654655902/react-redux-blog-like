
export default function postReducer(state=[], action) {
    switch (action.type){
        case 'LOAD_POSTS':
            return action.posts
        case 'ADD_LIKE':{
            let newState=state.map(item=>{
                if(item._id===action.postId){
                    return {...item,like:item.like+1}
                }
                return item
            })
            return newState
        }

        default:
            return state
    }
}

