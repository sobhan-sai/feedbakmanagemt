import React, { Component } from 'react'
class EventDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          participated: [],
          not_participated: [],
          un_reg: []
        }
    
      }
    
    
      componentDidMount = () => {
        let eventId = this.props.match.params.id;
        Axios.get('http://localhost:8060/event-report-service/event/' + eventId,  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` } }).then(res => {
    
          if (res.status == '200') {
            this.setState({ data: res.data })
    
    
          }
        }).catch(function (error) {
          console.log("error:", error);
        });
        Axios.get('http://localhost:8060/feedback-service/feedbacks/' + eventId,  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` } }).then(res => {
    
          if (res.status == '200') {
    
            this.setState({ participated: res.data[0].body.ParticipatedFeedBack })
            this.setState({ not_participated: res.data[0].body.NotParticipated })
            this.setState({ un_reg: res.data[0].body.Unregistered })
            this.Avg(res.data[0].body.ParticipatedFeedBack)
    
          }
        }).catch(function (error) {
          console.log("error:", error);
        });
    
      }
    
    
    
    
      render() {
        let avgScore = this.state.participated.reduce((sum, fb) => {
          return sum + parseInt(fb.rating);
        }, 0) / this.state.participated.length;
    
        let fbs = this.state.participated.length + this.state.not_participated.length + this.state.un_reg.length;
    
        return (
          <div className="container-fluid">
    
            <div >
              <div className=" py-2 text-white" style={{ backgroundColor: '#0000b3' }}> <h5 className="font-weight-bold ml-3">Actions</h5></div>
    
              <div className="row mb-3 mt-2">
    
                <div className="col-xl-6 col-sm-6 py-2">
                  <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                      <div className="rotate">
                        <i className="fa fa-envelope fa-4x"></i>
                      </div>
                      <h6 className="text"><b>Email Reminder!</b></h6>
                      <p className="font-weight-bold small">Sit back and relax while app  send emails!!
                                <a href="#" className="btn btn-dark py-2 text-capitalize ">Send Email</a></p>
                    </div>
                  </div>
                </div>
    
                <div className="col-xl-6 col-sm-6 py-2">
                  <div className="card text-black bg-warning h-100">
                    <div className="card-body ">
                      <div className="rotate">
                        <i className="fa fa-lightbulb fa-4x"></i>
                      </div>
                      <h6 className="text"><b>Future Implementation!</b></h6>
                      <p className="font-weight-bold small text-muted">This Placeholder can be use for adding any other actions in  future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-2 text-white" style={{ backgroundColor: '#0000b3' }}> <h6 className="font-weight-bold ml-3">EVENT & BENEFICIARY DETAILS</h6></div>
            <div className="row mb-3 mt-2">
              <div className="col-xl-6 col-sm-6 py-2">
                <div className="card text-center">
                  <div className=" card-header py-2 white-text" style={{ backgroundColor: '#0000b3' }}>
                    <p style={{ float: "left" }}><b>ID: {this.state.data.event_id}</b></p>
                    <p style={{ float: "right" }}><b >Date:&nbsp;{moment(this.state.data.event_date).format('MMM D, YYYY')}</b></p>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{this.state.data.event_name}</h4>
                    <p className="card-text">{this.state.data.event_description}</p>
    
                  </div>
                  <div className="card-footer text-muted ">
                    <p style={{ float: "left" }}><b>Status: <span className="badge badge-success py-1 ml-1">{this.state.data.status}</span></b></p>
                    <p style={{ float: "right" }}><b>Category:&nbsp;{this.state.data.category}</b></p>
                  </div>
                </div>
              </div>
    
              <div className="col-xl-6 col-sm-6 py-2">
                <div className="card text-center">
                  <div className=" card-header py-2 white-text" style={{ backgroundColor: '#0000b3' }}>
                    <p style={{ float: "left" }}><b>Location: {this.state.data.base_location}</b></p>
                    <p style={{ float: "right" }}><b>Council:&nbsp;{this.state.data.council_name}</b></p>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{this.state.data.beneficiary_name}</h4>
                    <p className="card-text">{this.state.data.venueture_address}</p>
    
                  </div>
                  <div className="card-footer text-muted gray-color ">
                    <p style={{ float: "left" }}><b>Feedback: <span className="badge badge-success py-1  ml-1">{fbs}</span></b></p>
                    <p style={{ float: "right" }}><b>Avg Rating:&nbsp;<span className="badge badge-success py-1 ml-1">{avgScore.toFixed(1)}</span></b></p>
                  </div>
                </div>
              </div>
    
            </div>
    
            <div>
              <div className="row mb-3 mt-2">
                <div className="col-lg-4 col-md-6 py-2 ">
                  <div className="card text-center pb-3 ">
                    <div className=" card-header py-1 white-text mb-2" style={{ backgroundColor: '#0000b3' }}>
                      <p style={{ float: "left" }}><b>PARTICIPATED</b></p>
    
                    </div>
                    {this.state.participated.map((fb, i) => {
                      return (<div className="card-body mb-1 py-1" >
                        <div style={{ border: "2px solid Green" }} className="py-2">
                          <div className="card-text text-left ml-1 " >Rating : {fb.rating}<hr />
                            Likes : {fb.likes}<hr />
                            Dislike : {fb.dislike}
                          </div>
                        </div>
                      </div>
                      )
                    })}
                  </div>
                </div>
    
                <div className="col-lg-4 col-md-6 py-2">
                  <div className="card text-center pb-3">
                    <div className=" card-header py-1 white-text" style={{ backgroundColor: '#0000b3' }}>
                      <p style={{ float: "left" }}><b>NOT PARTICIPATED</b></p>
    
                    </div>
                    <div className="card-body py-1 " >
                      {this.state.not_participated.map((fb, i) => {
                        return (<div style={{ border: "2px solid Green" }} className="mt-2">
                          <p className="card-text py-1">{fb.comment}</p>
                        </div>)
                      })}
                    </div>
    
                  </div>
                </div>
    
                <div className="col-lg-4 col-md-6 py-2">
                  <div className="card text-center pb-3">
                    <div className=" card-header py-1 white-text" style={{ backgroundColor: '#0000b3' }}>
                      <p style={{ float: "left" }}><b>UNREGISTERED</b></p>
    
                    </div>
                    <div className="card-body py-1 " >
                      {this.state.un_reg.map((fb, i) => {
                        return (<div style={{ border: "2px solid Green" }} className="mt-2">
                          <p className="card-text py-1">{fb.comment}</p>
                        </div>)
                      })}
                    </div>
    
                  </div>
                </div>
              </div>
    
            </div>
    
            <div>
              <div className="row mb-3 mt-2">
                <div className="col-xl-6 col-sm-3 py-2">
                  <div className="card text-center">
                    <div className=" card-header py-1 white-text" style={{ backgroundColor: '#0000b3' }}>
                      <p style={{ float: "left" }}><b>STATISTICS</b></p>
    
                    </div>
                    <div className="card-body ">
                      <div className="table-responsive">
                        <table className="table table-bordered table-sm ">
                          <thead style={{ backgroundColor: '#0000b3' }} className="text-white small">
                            <th>AVERAGE RATING</th>
                            <th>VOLUNTEERS</th>
                            <th>VOULUNTEERING HOURS</th>
                            <th>OVERALL HOURS</th>
                            <th>TRAVEL HOURS</th>
                            <th>LIVES IMPACTED</th>
                          </thead>
                          <tbody>
                            <td>{avgScore.toFixed(1)}</td>
                            <td>{this.state.data.total_no_of_volunteers}</td>
                            <td>{this.state.data.total_volunteer_hours}</td>
                            <td>{this.state.data.overall_volunteer_hours}</td>
                            <td>{this.state.data.total_travel_hours}</td>
                            <td>{this.state.data.lives_impacted}</td>
                          </tbody>
                        </table>
                      </div>
                    </div>
    
                  </div>
                </div>
    
                <div className="col-xl-6 col-sm-6 py-2">
                  <div className="card text-center">
                    <div className=" card-header py-1 white-text" style={{ backgroundColor: '#0000b3' }}>
                      <p style={{ float: "left" }}><b>POC DETAILS</b></p>
    
                    </div>
                    <div className="card-body">
                      <table className="table table-bordered table-sm">
                        <thead style={{ backgroundColor: '#0000b3' }} className="text-white small">
                          <th>#</th>
                          <th>EMPLOYEE ID</th>
                          <th>NAME</th>
                          <th>CONTACT NUMBER</th>
    
                        </thead>
                        <tbody>
                          <td>1</td>
                          <td>{this.state.data.poc_id}</td>
                          <td>{this.state.data.poc_name}</td>
                          <td>{this.state.data.poc_contact}</td>
    
    
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
    
          </div>
        )}
            
}
 
export default EventDetails;