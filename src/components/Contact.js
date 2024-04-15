
import React, { Component }  from "react";
import ReactFormInputValidation from "react-form-input-validation";
import chef from '../assets/chef.jpg';
 
export class Contact extends Component

{
    constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone_number: "",
        message: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        name: "required",
        email: "required|email",
        phone_number: "required|numeric|digits_between:10,12",
        message:"required",
    });
    this.form.onformsubmit = (fields) => {
      // Do you ajax calls here.
    }
  }
    render()
    {
        return(

          <div className="contact"  style={{ backgroundImage: `url(${chef})`}}>
           
          <div className="form">

        <h2>Contact Us</h2>
            
        <React.Fragment>
            <form onSubmit={this.form.handleSubmit}>
                <p>
                  <label>
                    Name &nbsp;
                    <input
                      type="text"
                      name="name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.name}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.name ? this.state.errors.name : ""}
                  </label>
                </p>
     
                <p>
                  <label>
                    Email &nbsp;
                    <input
                      type="email"
                      name="email"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.email}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.email ? this.state.errors.email : ""}
                  </label>
                </p>
     
                <p>
                  <label>
                    Phone &nbsp;
                    <input
                      type="tel"
                      name="phone_number"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.phone_number}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                  </label>
                </p>

                <p>
                  <label className="label">
                    Message Us &nbsp;
                    <textarea rows="4" cols="50"
                      type="text"
                      name="message"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.message}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.message ? this.state.errors.message : ""}
                  </label>
                </p>

                <div className="botton">
                  <button type="submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
        </div>
        </div>)
        
      }
    }
            
        



export default Contact;
