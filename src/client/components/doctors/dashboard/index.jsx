import React, { Component } from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import ProgressBar from "react-customizable-progressbar";
import StickyBox from "react-sticky-box";
import DoctorRepository from "../../../../repositories/DoctorRepository";
import {
  Icon01,
  Icon02,
  Icon03,
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
} from "./img";
class DoctorDashboard extends Component {
  constructor(props) {
    super(props);

    let today = new Date();
    let date = `${today
      .getDate()
      .toString()
      .padStart(2, "0")}, ${new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(today)} ${today.getFullYear()}`;

    this.state = {
      key: 1,
      date: date,
      doctors: [],
      loading: true,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(key) {
    this.setState({ key });
  }

  // fetch_data = async () => {
  //   let doctors_data = await DoctorRepository.getDoctors();
  //   console.log(doctors_data);
  //   this.setState({ doctors: doctors_data, loading: false });
  // };

  // componentDidMount() {
  //   fetch_data();
  // }

  render() {
    return (
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <DoctorSidebar />
                </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={50} // need to implement
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#da3f81"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                              >
                                <div className="indicator-volume">
                                  <img
                                    src={Icon01}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Total Patient</h6>
                                <h3>1500</h3> {/* need to implement */}
                                <p className="text-muted">Till Today</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={60} // need to implement
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#68dda9"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                              >
                                <div className="indicator-volume">
                                  <img
                                    src={Icon02}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Today Patient</h6>
                                <h3>160</h3> {/* need to implement */}
                                <p className="text-muted">{this.state.date}</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={70} /* need to implement */
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#1b5a90"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                              >
                                <div className="indicator-volume">
                                  <img
                                    src={Icon03}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Appoinments</h6>
                                <h3>85</h3> {/* need to implement */}
                                <p className="text-muted">{this.state.date}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mb-4">Patient Appoinment</h4>
                    {/* <p>{this.state.data}</p> */}
                    <div className="appointment-tab">
                      <Tabs
                        className="tab-view"
                        activeKey={this.state.key}
                        onSelect={this.handleSelect}
                        id="controlled-tab-example"
                      >
                        <Tab className="nav-item" eventKey={1} title="Upcoming">
                          <div
                            className="tab-pane show active"
                            id="upcoming-appointments"
                          >
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Patient Name</th>
                                        <th>Appt Date</th>
                                        <th>Purpose</th>
                                        <th>Type</th>
                                        <th className="text-center">
                                          Paid Amount
                                        </th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm mr-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={IMG01}
                                                alt="User"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Richard Wilson
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>
                                          11 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>General</td>
                                        <td>New Patient</td>
                                        <td className="text-center">$150</td>
                                        <td className="text-right">
                                          <div className="table-action">
                                            <Link
                                              to="#0"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i>{" "}
                                              View
                                            </Link>

                                            <Link
                                              to="#0"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#0"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab className="nav-item" eventKey={2} title="Today">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/doctor/patient-profile"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <img
                                              className="avatar-img rounded-circle"
                                              src={IMG01}
                                              alt="User"
                                            />
                                          </Link>
                                          <Link to="/doctor/patient-profile">
                                            Elsie Gilley <span>#PT0006</span>
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          6.00 PM
                                        </span>
                                      </td>
                                      <td>Fever</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$300</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <Link
                                            to="#0"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye"></i> View
                                          </Link>

                                          <Link
                                            to="#0"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check"></i>{" "}
                                            Accept
                                          </Link>
                                          <Link
                                            to="#0"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times"></i>{" "}
                                            Cancel
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorDashboard;
