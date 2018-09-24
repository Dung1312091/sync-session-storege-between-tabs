import React, { Component } from 'react';
import Storage from './Storage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }
  componentDidMount() {
    if (!sessionStorage.length) {
      console.log('sessionStorage.length',sessionStorage.length);
      // Ask other tabs for session storage
      localStorage.setItem('getSessionStorage', Date.now());
    }
    window.addEventListener('storage', this.a);
  }
  a = (event) => {
    console.log('storage event', event);

    if (event.key == 'getSessionStorage') {
      // Some tab asked for the sessionStorage -> send it
      console.log('even key getSessionStorage',JSON.stringify(sessionStorage) )
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
      // sessionStorage is empty -> fill it
     

      var data = JSON.parse(event.newValue);
      console.log('even key sessionStorage data',data)

      for (let key in data) {
        sessionStorage.setItem(key, data[key]);
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('storage', this.a);
  }
  showSessionStorage = () => {
    this.setState({
      token: sessionStorage.length
        ? JSON.stringify(sessionStorage)
        : 'sessionStorage is empty'
    });
  };
  setSession = (name, value) => {
    sessionStorage.setItem(name, value);
  };
  getSession = name => {
    return sessionStorage.getItem(name);
  };
  handleStorge = () => {
    sessionStorage.setItem('token', '123456789');
  };
  render() {
    return (
      <div>
     
        <p>ASASa</p>
        <Storage />
        <p>Token: {this.state.token}</p>
      </div>
    );
  }
}
export default App;