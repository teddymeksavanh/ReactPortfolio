// Services
import React from 'react';

// Components
import Header from './Header';
import './Header/style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-wrapper">
        <Header />
      </div>
    );
  }
}

export default Home;