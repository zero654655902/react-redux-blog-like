import React,{Component} from 'react'

// import store from './redux/store'
import {addComment} from "./redux/action/commentAction";
import {connect} from 'react-redux'
class CommentBox extends Component{
    handleSubmit=(e)=>{
        e.preventDefault()
        let comment=this.inputForm.value
        console.log(comment)
        let postId=this.props.post._id
        this.props.addComment({comment,postId})
        this.inputForm.value=''
        //console.log('handleSubmit',store.getState())
    }
    render(){
        console.log(this.props.comments)
          const commentList=this.props.comments.slice().reverse().map((item,i)=>
          (
              <li key={i}>{item.text}</li>
          )
      )
        let commentForm=(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={(text)=>this.inputForm=text}/>
                <button type="submit"> submit</button>
            </form>
        )
        return(
            <div>
                {commentForm}
                <ul>
                    {commentList}
                </ul>

            </div>
        )
    }
}


export default connect(null,{addComment})(CommentBox)
