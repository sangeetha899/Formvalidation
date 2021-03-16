import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (

            <>
                <nav className="Navigation_bar">

                    < span >
                        <span className="icon">

                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                size="sm"
                                style={{ color: "#FF8C00" }}

                            />



                        </span>&nbsp;
                                <Link to="/" style={{ color: "#ffffff" }} className="underline-hover">PersonalDetails</Link>
                    </ span>
                    <span>
                        <span className="icon">

                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                size="sm"
                                style={{ color: "#FF8C00" }}

                            />



                        </span>&nbsp;
                                <Link to="/company" style={{ color: "#ffffff" }} className="underline-hover">CompanyDetails</Link>
                    </span>
                    <span>
                        <span className="icon">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                size="sm"
                                style={{ color: "#FF8C00" }}
                            />
                        </span>&nbsp;
                                <Link to="/email" style={{ color: "#ffffff" }} className="underline-hover">Email Verification</Link>
                    </span>



                </nav>
            </>
        )
    }
}

export default Navbar;