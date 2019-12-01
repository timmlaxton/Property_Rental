import React, {Component} from 'react';
import logo from '../images/lodges.svg'
import{FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
  state={
    isOpen:false
  }
  hanleToggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
      <div className="nav-center">
      <div className="nav-header">
      <Link to="/">
      <div className="lodge-icon">
      <img src={logo} alt="lodge"/>
      </div>
      </Link>
      <button type="button" className="nav-btn" onClick={this.handleToggle}>
      <FaAlignRight className="nav-icon"/>
      </button>
      </div>
      <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
      <li>
      <Link to="/">Scottish Rentals</Link>
      </li>
      <li>
      <Link to="/rooms">Rooms</Link>
      </li>
      </ul>
      </div>
      </nav>

    )
  }
}
