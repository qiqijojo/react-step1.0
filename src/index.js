// import _ from 'lodash';

// function component() {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['啦啦啦', '删除dddd了'], ' ');

//     return element;
// }

// document.body.appendChild(component());
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';
// import {  } from ''

// const App = () => (
//     <div>啊哈哈哈哈</div>
// )
class App extends React.Component{
    render() {
        return (
            <div>啊哈哈哈sss哈</div>
        )
    }
}
ReactDom.render(
    <App/>,
     document.getElementById('app'),
)