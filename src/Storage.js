import React, { Component } from 'react';
class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }
  handleStorge = () => {
    sessionStorage.setItem('token', '123456789');
  };
  render() {
    return (
      <div>
        
        <button onClick={this.handleStorge}>SetStorge</button>
       
      </div>
    );
  }
}
export default Storage;