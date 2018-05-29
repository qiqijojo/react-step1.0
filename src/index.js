import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack1.0'], ' ');

    return element;
}

document.body.appendChild(component());