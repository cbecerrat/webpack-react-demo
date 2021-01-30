import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello, World!</h1>
                <Button>Press me!</Button>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('main'));
