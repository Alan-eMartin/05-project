import React, { Component } from 'react';
import firebase from './firebase/firebase'

// sass
import './styles/setup.scss'
import './styles/header.scss'

// components
import Profile from './components/Profile/Profile'
import TopNav from './components/TopNav/TopNav'


class App extends Component {
  render() {
    return (
      <>
        <header>
          <TopNav />
            <div className="container">
              <Profile />
            </div>
        </header>
      </>
    );
  }
}

export default App;
