import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Hello, world!'
//     };
//   }

  render() {
    return (
        <Card className="text-center" style={{marginTop:438}}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  }
}

export default Footer;