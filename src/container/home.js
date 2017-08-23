import {connect} from "react-redux";
import Home from '../component/Home'
const mapStateToProps=(state)=>({
    posts:state.posts
})

export default connect(mapStateToProps)(Home)