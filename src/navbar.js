
import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Ndnav extends Component {
    constructor(props) {
         super(props);
        this.state = { store: '' };
    }
    componentDidMount = () => {
      
        $('.toggler').on('click', function () {
            // alert('hello Jquery');
          $('nav').toggle();
        });
      
  }

    render() {
       return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add">Add Name</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div
               className="toggler">&#9776;</div>
      </header>
    </div>
  );
    }
}
export default Ndnav;
