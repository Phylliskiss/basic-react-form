import React, { Component } from "react";

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""

        }

        this.handleChange =(e) =>{
            e.preventDefault()
            this.setState({
                [e.target.name]: e.target.value
            });

        }

        this.handleSubmit =(e) =>{
            e.preventDefault()
            console.log(this.state)
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input type="text" name="name" onChange={this.handleChange}/>
          <br />
          <br />
          <label htmlFor="email"> email address</label>
          <input type="email" name="email"onChange={this.handleChange}/>
          <br /> 
          <br />
          <label htmlFor="password">password</label>
          <input type="password" name="password"onChange={this.handleChange}/>
          <br /> 
          <br />
          <button className="myforms"> Submit</button>
        </form>
       
       
      </div>
    );
  }
}

export default ClassForm;
