import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import logo from "../outreach-logo.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../actions/projectActions";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      errors:{}
    };

   // this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

componentWillReceiveProps(nextProps){
  if(nextProps.errors){
    this.setState({errors:nextProps.errors});
  }
 }
//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

changeEmailHandler = (event) => {
  this.setState({ userName: event.target.value });
}

changePasswordHandler = (event) => {
  this.setState({ password: event.target.value });
}


  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      userName: this.state.userName,
      password: this.state.password
    }
    console.log(loginUser);
    this.props.loginUser(loginUser,this.props.history)
  }      

// Schema for yup
    render() {
        return  (
         <div className="container mt-5" >
         <div className="row">
           <div className="col-lg-7 col-sm-12">
             <img src={require('../login_logo.jpg')} width="100%" height="85%" alt="Img not Supported" />
           </div>
           <div className="col-lg-5 col-sm-12">
             <div className="card">
               <div className="card-body px-lg-5 pt-0">
                 <h4 className="white-text  mt-4">
                   <strong><i className="fa fa-handshake fa-rotate-45" /> <label className=" font-weight-bold  mr-2" style={{ color: '#0000b3' }}>Cognizant</label><label style={{ color: '#6DE818' }}>Outreach</label> </strong>
                 </h4>
                 <p className="text-dark">Feedback Management System</p>
 
                 <div className="md-form">
                   <label for="materialLoginFormEmail">E-mail</label>
                   <input type="text" id="materialLoginFormEmail" value={this.state.userName}
                        onChange={this.changeEmailHandler.bind(this)} className="form-control" />
                 </div>
                 <div className="md-form">
                   <label for="materialLoginFormPassword">Password</label>
                   <input type="password" id="materialLoginFormPassword"  value={this.state.password}
                        onChange={this.changePasswordHandler.bind(this)} className="form-control" />
 
                 </div>
 
                 <div className="d-flex justify-content-around">
                   <div className="custom-control custom-checkbox">
                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
                     <label className="custom-control-label" for="customCheck1">Remember Me</label>
                   </div>
                   <div>
                     <a href="">Forgot password?</a>
                   </div>
                 </div>
 
                 <button className="btn btn-outline btn-rounded btn-block my-4 waves-effect z-depth-0 text-white bg-success" type="submit" onClick={this.onSubmit.bind(this)}>Sign Me in</button>
                 <p>Not a member?
              <a href="">Register</a>
                 </p>
               </div>
             </div>
           </div>
         </div>
 
       </div >  
        );

              
    }
}
 Login.propTypes={
   loginUser: PropTypes.func.isRequired,
   errors: PropTypes.object.isRequired
 }
 const mapStateToProps=state=>({
   errors:state.errors
   
 })
export default connect(mapStateToProps,{loginUser})(Login);