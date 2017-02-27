import React from 'react';
import { Button, Card } from 'semantic-ui-react';


export class List extends React.Component {
  render(){
    let contentData = [
      {id: '5bc7f15d-aff3-5b41-b891-61c35306ba1d', severity: 'High', content: 'makan siang', user: 'Me', issue: 'Close'},
      {id: '4e72e6dd-4a74-5d4e-8068-07ad6bd65b51', severity: 'Low', content: 'makan sore', user: 'Yoni', issue: 'Open'},
      {id: '53dff15d-1dd3-5b41-b891-61cwefsdba1d', severity: 'Medium', content: 'makan malam', user: 'Timo', issue: 'Close'},
    ];
    return (
      <div>
        {contentData.map((data, index) =>{
          return (
            <Card fluid key={index}>
              <Card.Content>
                <Card.Header>
                  BugId: {data.id}
                </Card.Header>
                <Card.Meta>
                  {data.severity}
                </Card.Meta>
                <Card.Description>
                  <p>{data.content}</p>
                  <p>Assigned To: {data.user}</p>
                </Card.Description>
                <Card.Meta>
                  {data.issue}
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
        })}
      </div>
    );
  }
}
