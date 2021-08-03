import React, { Component } from 'react';
import $ from 'jquery';

class Jquery extends Component {
    constructor(props) {
         super(props);
        this.state = { store: '' };
    }
    componentDidMount = () => {
        let _this = this;
        $('button').click(function () {
            // alert('hello Jquery');
            _this.setState({ store: Math.random() * 100 });
        });
    }
    render() {
        return (
            <div>
                <h1>Hello Jquery</h1>
                <button>Click me</button>
                <p>{ this.state.store}</p>
            </div>
        );
    }
}
export default Jquery;