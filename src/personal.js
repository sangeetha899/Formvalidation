import React from 'react';
import {Redirect} from 'react-router-dom';
import {CountryDropdown,RegionDropdown } from 'react-country-region-selector';
import Navbar from './navbar';

 const initialstate={
    fullname:"",
    isborder: false,
    isselectcountrybox: false,
    isselectstatebox: false,
    isselectphonebox: false,
    country:"",
    region:"",
    nameerror:"",
    redirect:false,
 }

class Personaldetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
       
    }
  
    
    isboxclick = () => {
        this.setState({
            isborder: !this.state.isborder,
        })
    }
    
    isselectcountry = () => {
        this.setState({
            isselectcountrybox: !this.state.isselectcountrybox,
        })
    }
    isselectstate = () => {
        this.setState({
            isselectstatebox: !this.state.isselectstatebox,
        })
    }
    isselectphone = () => {
        this.setState({
            isselectphonebox: !this.state.isselectphonebox,
        })
    }
    selectcountry=(value)=>{
        this.setState({country: value})
    }

    selectregion=(value)=>{
        this.setState({region:value})
    }
    
    _isfullname = (event)=>{
        this.setState({
            fullname:event.target.value
        })
    }

 

 handleSubmit =(event) => {
     event.preventDefault();
     const checkname = this.check_nameerror();
     if(checkname){  
        console.log(this.state);
        this.setState(initialstate);
         this.setState({
             redirect:true
        })
  
     }
 }

 check_nameerror =()=>{
let name_error="";
if(this.state.fullname.length < 2){
    name_error="This field is required";
}

if(name_error){
    this.setState({
        nameerror:name_error,
    })
    return false;
}
return true;
        }
    
 renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to ='/company' />
       
    }
   
}

    render() {
        
        return (
            <>
            <Navbar/>
                <div  className="body_bgcolor " style={{height:"670px"}}>
                <br/>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <strong>
                            <p style={{ fontSize: "20px" }}>
                                Add Your Personal Details</p>
                        </strong>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typetexting industry.
                            </p>
                    </div>
                    <br />
                    <form  onSubmit={this.handleSubmit} >
                    <div style={{
                        height: "500px",
                        width: "500px",
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        margin: "auto",
                        borderRadius: 4,
                        textAlign: "left"
                    }}>
                        <div className="field ">
                            <label className="label "
                                style=
                                {{
                                    color: `${this.state.isborder === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                                }}
                            >
                                Full Name
                                
                                </label>
                            <div className="control">
                                <input  style={{
                                        border: `${this.state.isborder === true
                                            ? ('1px solid #FF8C00')
                                            : ('1px solid #808080')}`,
                                    }}
                                 type="text"  
                                onClick={this.isboxclick}
                                value={this.state.fullname}
                                onChange={this._isfullname}
                                />
                            </div>
                                <p style={{color:"red"}}>{this.state.nameerror}</p>
                        </div>
                        {/* <div className="field ">
                            <label className="label" style={{color:"grey"}}>Gender</label>
                            <div className="buttons" >
                                <button className="button" id="button_one" 
                                style={{backgroundColor:"#FF8C00"}}
                                >Male</button>
                                <button className="button" id="button_two"
                               
                                >Female</button>
                                <button className="button" id="button_third"
                                
                                >other</button>
                            </div>
                        </div> */}
                        <label className="label"
                            style={{
                                color:
                                    `${this.state.isselectcountrybox === true
                                        ? ('#FF8C00')
                                        : ('#808080')}`
                            }}
                        >
                            Country
                            
                            </label>
                        <div className="field ">
                            <div className="control">
                                <CountryDropdown
                                 style={{
                                    border: `${
                                        this.state.isselectcountrybox === true
                                         ?('1px solid #FF8C00') 
                                         :('1px solid #808080')}`,
                                    width: "100%",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    outline: "none"
                                }}
                                value={this.state.country}
                                onChange={(this.selectcountry)}
                                />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label"
                                style={{
                                    color:
                                        `${this.state.isselectstatebox === true
                                            ? ('#FF8C00')
                                            : ('#808080')}`
                                }}
                            >
                                State
                                
                                </label>
                            <RegionDropdown style={{
                                border: `${this.state.isselectstatebox === true
                                    ? ('1px solid #FF8C00')
                                    : ('1px solid #808080')}`,
                                width: "100%",
                                padding: "8px",
                                borderRadius: "6px",
                                outline: "none"
                            }}
                                country={this.state.country}
                                value={this.state.region}
                                onChange={this.selectregion}
                            />

                        </div>
                        <div className="field ">
                            <label className="label"
                                style={{
                                    color:
                                        `${this.state.isselectphonebox === true
                                            ? ('#FF8C00')
                                            : ('#808080')}`
                                }}
                            >
                                Phone

                            </label>
                            <select style={{
                                border: `${
                                    this.state.isselectphonebox === true 
                                    ? ('1px solid #FF8C00')
                                    : ('1px solid #808080')}`,
                                width: "100%",
                                padding: "8px",
                                borderRadius: "6px",
                                outline: "none"
                            }}
                                onClick={this.isselectphone}
                                >
                                <option>+91</option>
                            </select>
                        </div>
                        <br/>
                        {this.renderRedirect()}
                            <button 
                            type="submit"
                            className=" button  is-fullwidth is-small style-button"
                            >
                                <span> Next</span>      
                    </button>
                   
                    </div>
                    <br />
                    <p
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        Already have an account? <a><strong style={{ color: "#FF8C00" }} >Log in</strong></a> </p>
                        </form>
                </div>
            </>

        )
    }
}

export default Personaldetails;