import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';

const initialstate = {
    otp_num: "",
    otp_num1: "",
    otp_num2: "",
    otp_num3: "",
    otp_num4: "",
    otperrormsg: "",
    redirect: false,
}

class Emailverify extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
    }

    set_otp = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ otp_num: event.target.value })
        }
    }
    set_otp1 = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ otp_num1: event.target.value })
        }
    }
    set_otp2 = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ otp_num2: event.target.value })
        }
    }
    set_otp3 = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ otp_num3: event.target.value })
        }
    }
    set_otp4 = (event) => {
        const regexp = /^[0-9\b]+$/;
        if (event.target.value === '' || regexp.test(event.target.value)) {
            this.setState({ otp_num4: event.target.value })
        }
    }

    formsubmit = () => {
        if (!this.state.otp_num || !this.state.otp_num1 || !this.state.otp_num2 || !this.state.otp_num3 || !this.state.otp_num4) {
            this.setState({
                otperrormsg: "Enter OTP number",
            })
            return false;
        }
        return true;
    }

    handlesubmit = (event) => {
        event.preventDefault();
        const check_error = this.formsubmit();
        if (check_error) {
            console.log(this.state);
            this.setState(initialstate);
            this.setState({
                redirect: true,
            })
        }

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/success" />
        }
    }

    render() {
        return (
            < div style={{ backgroundColor: "#F5F5F5", height: "670px" }}>
                <Navbar />
                <br />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <strong><p style={{ fontSize: "20px" }}>Enter Your OTP</p></strong>
                    <p>For your Security,We need to verify your identity.We send a five digit code to your
                        <strong>example@domain.com</strong>.Please enter it below</p>
                </div>
                <br />
                <form onSubmit={this.handlesubmit}>
                    <div style={{
                        height: "300px",
                        width: "400px",
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        margin: "auto",
                        borderRadius: 4,
                        textAlign: "left"
                    }}>
                        <div className="field">
                            <label className="label">Enter your code</label>
                            <br />
                            <div className="columns is-centered is-mobile ">
                                <div className="column is-2">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        value={this.state.otp_num}
                                        onChange={this.set_otp}
                                    />
                                </div>
                                <div className="column is-2">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        value={this.state.otp_num1}
                                        onChange={this.set_otp1}
                                    />
                                </div>
                                <div className="column is-2">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        value={this.state.otp_num2}
                                        onChange={this.set_otp2}
                                    />
                                </div>
                                <div className="column is-2">
                                    <input type="text"
                                        maxLength="1"
                                        value={this.state.otp_num3}
                                        onChange={this.set_otp3} />
                                </div>
                                <div className="column is-2">
                                    <input type="text"
                                        maxLength="1"
                                        value={this.state.otp_num4}
                                        onChange={this.set_otp4}
                                    />
                                </div>
                            </div>
                            <p style={{ color: "red", textAlign: "center" }}>{this.state.otperrormsg}</p>
                        </div>
                        <br />
                        <div className="columns">
                            <div className="column is-4">
                                <Link to="/company" >
                                    <button className=" button  style-button is-fullwidth is-small">
                                        <span>
                                            Back
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="column is-8">
                                {this.renderRedirect()}
                                <button

                                    className=" button  button_send is-fullwidth is-small"
                                    type="submit"
                                >
                                    <span>
                                        verify
                                    </span>

                                </button>

                            </div>
                        </div>
                        <hr style={{ borderBottom: "1px solid black" }} />
                        <p>
                            Didn't receive the email? Check your Spam filter for an email from <strong>example@domain.com.</strong>
                        </p>

                    </div>
                </form>
            </ div>
        )
    }
}

export default Emailverify;