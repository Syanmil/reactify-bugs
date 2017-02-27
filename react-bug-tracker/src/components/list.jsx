import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';


export class List extends React.Component {
  render(){
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            BugId: 5bc7f15d-aff3-5b41-b891-61c35306ba1d
          </Card.Header>
          <Card.Meta>
            High
          </Card.Meta>
          <Card.Description>
            <p>makan siang</p>
            <p>Assigned To: Me</p>
          </Card.Description>
          <Card.Meta>
            Open
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Close</Button>
            <Button basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
