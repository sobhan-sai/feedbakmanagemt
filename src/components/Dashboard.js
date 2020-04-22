import React, { Component } from 'react'
import './Dashboard.css';
import {Link} from "react-router-dom";
class Dashboard extends Component {
    state = {  }
    sayHello() {
        alert('Hello!');
      }
      
    render() { 
        return ( 
            <React.Fragment>
            <div className="card-deck panel-width">
            <div className="card pmd-card">
              <div className="card-body bg-color-coral">
                <i className="fa fa-television pull-right icon-color-tv" style={{fontSize: "60px"}}></i>
                <h4 className="card-title font-color font-size-head" style={{textAlign:"left"}}>TOTAL EVENTS</h4>
                <p class="card-text font-color font-size-body" style={{textAlign:"left"}}>22</p>
              </div>
              <div className="card-footer" style={{backgroundColor:"#7F453C", textAlign:"right"}}>
              <span
                  className="view-click-style" style={{color:"white"}}>View Details  <i className="fa fa-arrow-circle-right" style={{color:"white"}}></i>
                  </span>
            </div>
            </div>
          
            <div className="card pmd-card">
              <div className="card-body bg-color-orange">
                <i className="fa fa-link pull-right icon-color-link" style={{fontSize: "60px"}}></i>
                <h4 className="card-title font-color font-size-head" style={{textAlign:"left"}}>LIVES IMPACTED</h4>
                <p className="card-text font-color font-size-body" style={{textAlign:"left"}}>31</p>
              </div>
              <div className="card-footer" style={{backgroundColor:"#ff4e00", textAlign:"right"}}>
              <span
                  className="view-click-style" style={{color:"white"}}>View Details  <i className="fa fa-arrow-circle-right" style={{color:"white"}}></i>
                  </span>
            </div>
            </div>
          
            <div className="card pmd-card">
              <div className="card-body bg-color-purple">
                <i className="fa fa-users pull-right icon-color-users" style={{fontSize: "60px"}}></i>
                <h4 className="card-title font-color font-size-head" style={{textAlign:"left"}}>TOTAL VOLUNTEERS</h4>
                <p className="card-text font-color font-size-body" style={{textAlign:"left"}}>45</p>
              </div>
              <div className="card-footer" style={{backgroundColor:"#81235E", textAlign:"right"}}>
              <span
                  className="view-click-style" style={{color:"white"}}>View Details  <i className="fa fa-arrow-circle-right" style={{color:"white"}}></i>
                  </span>
            </div>
            </div>
          
            <div className="card pmd-card">
              <div className="card-body bg-color-grey">
                <i className="fa fa-clock-o pull-right icon-color-clock" style={{fontSize: "60px"}}></i>
                <h4 className="card-title font-color font-size-head" style={{textAlign:"left"}}>TOTAL PARTICIPANTS</h4>
                <p className="card-text font-color font-size-body" style={{textAlign:"left"}}>50</p>
          
              </div>
              <div className="card-footer" style={{backgroundColor:"#44493E", textAlign:"right"}}>
              <span
                  className="view-click-style" style={{color:"white"}}>View Details  <i className="fa fa-arrow-circle-right" style={{color:"white"}}></i>
                  </span>
            </div>
            </div>
          </div>
          </React.Fragment>
         );
    }
}
 
export default Dashboard;