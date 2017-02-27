import React from 'react';

export class Form extends React.Component {
  render(){
    return (
      <form className="ui form">
        <h3>Add New Bug Report</h3><br></br>
        <label>Description</label><br></br>
        <input type="text" placeholder="Describe a Bug..."></input><br></br>
        <label>Severity</label><br></br>
        <select name="severity">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select><br></br>
        <label>Assigned To</label><br></br>
        <input type="text" placeholder="Enter Responsible..."></input><br></br>
        <button className="ui button yellow" type="submit">Submit</button><br></br><hr></hr>
      </form>
    );
  }
}
