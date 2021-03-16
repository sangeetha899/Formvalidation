import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';

const initialstate = {
    iscompanyname: false,
    isemailid: false,
    isjobtitle: false,
    isyoe: false,
    companyname: "",
    emailid: "",
    jobtitle: "",
    yoe: "",
    nameerror: "",
    emailerror: "",
    titleerror: "",
    yoeerror: "",
    redirect: false,
}
class Companydetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
    }

    _iscompanyname = () => {
        this.setState({
            iscompanyname: !this.state.iscompanyname,
        })
    }

    _isemailid = () => {
        this.setState({
            isemailid: !this.state.isemailid,
        })
    }
    _isjobtitle = () => {
        this.setState({
            isjobtitle: !this.state.isjobtitle,
        })
    }
    _isyoe = () => {
        this.setState({
            isyoe: !this.state.isyoe,
        })
    }
    company_name = (event) => {
        this.setState({
            companyname: event.target.value,
        })
    }

    check_email = (event) => {
        this.setState({
            emailid: event.target.value,
        })
    }

    check_title = (event) => {
        this.setState({
            jobtitle: event.target.value,
        })
    }

    check_yoe = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ yoe: event.target.value })
        }
    }


    ischeck_error = () => {
        let name_error = "";
        let email_error = "";
        let job_title = "";
        let yoe_error = "";

        if (!this.state.companyname) {
            name_error = "This field is required";
        }
        if (!this.state.emailid.includes("@")) {
            email_error = "please provide correct emailId";
        }
        if (!this.state.jobtitle) {
            job_title = "This field is required"
        }
        if (!this.state.yoe) {
            yoe_error = "This field is required"
        }
        if (name_error || email_error || job_title || yoe_error) {
            this.setState({
                nameerror: name_error,
                emailerror: email_error,
                titleerror: job_title,
                yoeerror: yoe_error,
            })
            return false;
        }
        return true;
    }

    handlesubmit = (event) => {
        event.preventDefault();
        const checkerror = this.ischeck_error();
        if (checkerror) {
            console.log(this.state);
            this.setState(initialstate);
            this.setState({
                redirect: true,
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/email' />
        }
    }


    render() {
        return (
            <div style={{ backgroundColor: "#F5F5F5", height: "670px" }}>
                <Navbar />
                <br />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <strong><p style={{ fontSize: "20px" }}>Add Your Company Details</p></strong>
                    <p>Lorem ipsum is simply dummy text of the printing and typetexting industry</p>
                </div>
                <br />
                <form onSubmit={this.handlesubmit} >
                    <div style={{
                        height: "500px",
                        width: "500px",
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        margin: "auto",
                        borderRadius: 4,
                        textAlign: "left"
                    }}>
                        <div className="field"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }}>
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                size="3x"
                            />
                        &nbsp;&nbsp;<span style={{ color: "darkorange" }}>upload your company logo</span>
                        </div>
                        <div className="field">
                            <label className="label"
                                style=
                                {{
                                    color: `${this.state.iscompanyname === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                                }}
                            >
                                Company Name
                            </label>
                            <div className="control">
                                <input
                                    style={{
                                        border: `${this.state.iscompanyname === true
                                            ? ('1px solid #FF8C00')
                                            : ('1px solid #808080')}`,
                                    }}
                                    type="text"
                                    value={this.state.companyname}
                                    onChange={this.company_name}
                                    onClick={this._iscompanyname}
                                />
                            </div>
                            <p style={{ color: "red" }}>{this.state.nameerror}</p>
                        </div>
                        <div className="field">
                            <label className="label"
                                style=
                                {{
                                    color: `${this.state.isemailid === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                                }}
                            >
                                Email Id</label>
                            <div className="control">
                                <input
                                    style={{
                                        border: `${this.state.isemailid === true
                                            ? ('1px solid #FF8C00')
                                            : ('1px solid #808080')}`,
                                    }}
                                    type="text"
                                    value={this.state.emailid}
                                    onChange={this.check_email}
                                    onClick={this._isemailid}
                                />
                            </div>
                            <p style={{ color: "red" }}>{this.state.emailerror}</p>
                        </div>
                        <div className="field ">
                            <label className="label"
                                style=
                                {{
                                    color: `${this.state.isjobtitle === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                                }}
                            >
                                Job Title
                            </label>
                            <div className="control">
                                <input
                                    style={{
                                        border: `${this.state.isjobtitle === true
                                            ? ('1px solid #FF8C00')
                                            : ('1px solid #808080')}`,
                                    }}
                                    type="text"
                                    value={this.state.jobtitle}
                                    onChange={this.check_title}
                                    onClick={this._isjobtitle}
                                />
                            </div>
                            <p style={{ color: "red" }}>{this.state.titleerror}</p>
                        </div>
                        <div className="field ">
                            <label className="label"
                                style=
                                {{
                                    color: `${this.state.isyoe === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                                }}
                            >
                                Years of Experience
                            </label>
                            <div className="control">
                                <input
                                    style={{
                                        border: `${this.state.isyoe === true
                                            ? ('1px solid #FF8C00')
                                            : ('1px solid #808080')}`,
                                    }}
                                    type="text"
                                    value={this.state.yoe}
                                    onChange={this.check_yoe}
                                    onClick={this._isyoe}
                                />
                            </div>
                            <p style={{ color: "red" }}>{this.state.yoeerror}</p>
                        </div>
                        <div className="field ">
                            <label className="checkbox">
                                <input type="checkbox" />
                                &nbsp;I agree to the <strong style={{ color: "#FF8C00" }}>terms and conditions</strong>
                            </label>
                        </div>
                        <div className="columns">
                            <div className="column is-4">
                                <Link to="/" >
                                    <button className=" button is-fullwidth is-small button_send">
                                        <span>
                                            Back
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="column is-8">
                                {this.renderRedirect()}
                                <button
                                    className=" button  is-fullwidth is-small button_send"
                                    type="submit"
                                >
                                    <span>
                                        Send to OTP
                                    </span>
                                </button>



                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Companydetails;