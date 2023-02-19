import React, { Component } from "react";
import axios from "axios";
// import Data from "./Component/Data";
import "bootstrap/dist/css/bootstrap.min.css";

export default class UpdateData extends Component {
 

  render() {
    // {console.log(this.props.selectedInfo)}
    return (
    
      <div>
        <form onSubmit={this.props.saveInfo}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="user_name"
              defaultValue={this.props.selectedInfo.user_name}
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
               defaultValue={this.props.selectedInfo.address}/>
             
          </div>
          <div className="mb-3">
            <label className="form-label">Phone numer</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              defaultValue={this.props.selectedInfo.phone}

              />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
}
