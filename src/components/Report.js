import React, { Component } from 'react'
class Report extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

    }

    componentDidMount = () => {
        if (localStorage.getItem("role") == 'Admin' || localStorage.getItem("role") == 'Pmo') {
        Axios.get('http://localhost:8082/eventInformation/eventReport',  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` } }).then(res => {

            if (res.status == '200') {
                this.eventTableHandler(res.data)

            }
        }).catch(function (error) {
            console.log("error:", error);
        });
    } else {
        Axios.get('http://localhost:8060/event-report-service/eventReport-empId/'+localStorage.getItem("userEmpId"),  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` } }).then(res => {

            if (res.status == '200') {
                this.eventTableHandler(res.data)

            }
        }).catch(function (error) {
            console.log("error:", error);
        });
    }

    }

    eventTableHandler = (eventdata) => {
        eventdata.filter((event) => {

            let eventtest={
                eventId:event.eventId,
                eventDate:event.eventDate,
                councilName:event.councilName,
                baseLocation:event.baseLocation,
                beneficiaryName:event.benificiaryName
                
            }

            this.state.data.push(eventtest)

        })
        this.setState({ data: this.state.data })

    }


    handlerClickCleanFiltered() {

        this.refs.clear2.cleanFiltered();
        this.refs.clear3.cleanFiltered();
        this.refs.clear4.cleanFiltered();
        this.refs.clear5.cleanFiltered();
        this.refs.clear6.cleanFiltered();
    }

    render() {


        const options = {
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            hideSizePerPage: true,

        };
        console.log(this.props)

        return (


            <div className="container-fluid" >

                <div >
                    <div className="py-2 text-white" style={{ backgroundColor: '#0000b3' }}> <h5 className="font-weight-bold ml-3">Actions</h5></div>

                    <div className="row mb-3 mt-2">

                        <div className="col-xl-6 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fas fa-file-excel fa-4x"></i>
                                    </div>
                                    <h6 className="text"><b>Email Report!</b></h6>
                                    <p className="font-weight-bold text-md"> Employee ID &nbsp; <input type="text" className="form-control-sm" placeholder="Enter Email Address" />
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
                <div>
                    <div className=" py-2 text-white mb-2" style={{ backgroundColor: '#0000b3' }}> <h5 className="font-weight-bold ml-3" >Reports</h5></div>
                    <div className="btn btn-danger text-white float-right py-1" onClick={this.handlerClickCleanFiltered.bind(this)} > <i className="fa fa-times"></i>&nbsp;clear filters</div>
                    <BootstrapTable data={this.state.data} striped hover height='500px' options={options} pagination exportCSV csvFileName='eventReport.csv'>
                        <TableHeaderColumn width='150' ref='clear2' dataField='eventId' isKey filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Filter column...' }}>Event ID</TableHeaderColumn>
                        <TableHeaderColumn width='120' ref='clear3' dataField='eventDate' filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Filter column...' }}>Month</TableHeaderColumn>
                        <TableHeaderColumn width='200' ref='clear4' dataField='baseLocation' filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Filter column...' }}>BaseLocation</TableHeaderColumn>
                        <TableHeaderColumn width='200' ref='clear5' dataField='councilName' filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Filter column...' }}>CouncilName</TableHeaderColumn>
                        <TableHeaderColumn ref='clear6' dataField='beneficiaryName' filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Filter column...' }}>BeneficiaryName</TableHeaderColumn>

                    </BootstrapTable>

                </div>

            </div>
        )

    }
}
 
export default Report;