import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                啊哈哈哈张艺兴
                <h2>houhou</h2>
            </div>
        );
    }
}
ReactDom.render(
    <App />,
    document.getElementById('app'),
);

