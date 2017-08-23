import React, {Component} from 'react';
import './App.css';
import Home from './Home'
import Post from './Post'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import getPosts from './redux/action/postAction'
import {connect} from 'react-redux'
import post from './api/post'

class App extends Component {
    componentWillMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div className="App">

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/post/:id" component={Post}/>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default connect(null,{getPosts})(App);


/* 各个组件通过react-redux库的Provider和connect接口订阅store中的数据
* 当store数据变化了，组件是可以自动刷新的*/