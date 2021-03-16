import React from 'react';
import Navbar from './navbar';

class Successfulpage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <p
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                    <strong>Your Application is Successfully Submitted!!!!.......</strong>
                </p>
            </div>
        )
    }
}

export default Successfulpage;