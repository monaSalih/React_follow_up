import { react, Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      user_name:'',
      address:'',
      phone:''
    };
  }
  /////handling change for input
  handleInputChange=(event)=>{
    console.log(event.target,"event.target");
    const {name,value}=event.target;
    // const value= event.target;

    this.setState({
        [name]:value
    })
    console.log(name,"name",value,"value");
}

    ////handling submit for user input
    handleSubmit=(event)=>{
        event.preventDefault();
        let user_name=this.state.user_name;
        let phone=this.state.phone;
        let address=this.state.address
        // console.log(user_name,"user_name");
        // console.log(phone,"user_name");
        // console.log(address,"user_name");

            axios.post(`http://localhost/React_follow_up/Crud/backend/add.php?user_name=${user_name}&address=${address}&phone=${phone}`)

    }
  
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <input
              type="text"
              placeholder="Enter your name"
              id="user_name"
              name="user_name"
              value={this.state.user_name}
              onChange={this.handleInputChange}

              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>address</Form.Label>
            <input
            id="address"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}

              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>phone</Form.Label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
                onChange={this.handleInputChange}
             
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
       
      </>
    );
  }
}

