import React, { Component } from 'react';
import './Header.css';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { NavLink } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this)
  }
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  Logout = () => {
   
    sessionStorage.clear();
    window.location.href ='/'
  }
    render() { 
        return ( 
          <div class="mb-2">
          <MDBNavbar style={{ backgroundColor: '#0000b3' }} dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text"> <i className="fa fa-handshake" /> Outreach FMS</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem >
  
                  <MDBNavLink exact to="/dashboard"  > <i className="fa fa-plus-square" /> &nbsp;DashBoard</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
  
                  <MDBNavLink exact to="/events"> <i className="fa fa-arrow-circle-right" /> &nbsp; Events</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
  
                  <MDBNavLink to="/report"> <i className="fa fa-file-excel" /> &nbsp; Reports</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown >
                    <MDBDropdownToggle nav caret>
                      <i className="fa fa-cog" /> &nbsp;
                    <div className="d-none d-md-inline">Configuration</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu >
                      <NavLink to="/role" ><MDBDropdownItem>Roles</MDBDropdownItem></NavLink>
                      <NavLink to="/questions"><MDBDropdownItem >Feedback Questions</MDBDropdownItem> </NavLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" /> &nbsp; {sessionStorage.getItem("username")}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-menu">
                      <MDBDropdownItem onClick={this.Logout}>Log Out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
         );
    }
}
 
export default Header;