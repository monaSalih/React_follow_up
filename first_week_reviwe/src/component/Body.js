import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Body extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Hello, world!'
//     };
//   }

  render() {
    console.log(this.props.bookDetails,"{this.props.bookDetails}");
    // const {bookTitle,author,description,bookImage}=this.props.bookDetails;
    // console.log(bookImage,"bookImg");
    return (
        <div style={{marginRight: '5'}}>
   
       <Card style={{ width: '18rem',marginRight: '15px' }}>
        <Card.Img variant="top" src={this.props.bookDetails.bookImage} style={{width:'18rem',height:'25rem'}}/>
        <Card.Body>
          <Card.Title >{this.props.bookDetails.bookTitle}</Card.Title>
          <Card.Text>
          {this.props.bookDetails.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> 
      
      </div >
    );
  }
}

export default Body;