import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {fetchHomeValues} from './../actions/home';

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

         <NavbarBrand  tag={Link} to="/">reactstrap</NavbarBrand>

         <NavbarToggler onClick={this.toggle} />

         <Collapse isOpen={this.state.isOpen} navbar>

           <Nav className="ml-auto" navbar>

             <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
             </NavItem>


           </Nav>
         </Collapse>
       </Navbar>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {mainNav: state};
}

export default connect(mapStateToProps, {})(MainNav);
