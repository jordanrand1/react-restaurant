import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  state = { menus: [] }
  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    const { menus } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <ul>
          { menus.map( m =>
              <li key={m.id}>
                <Link to={`/menus/${m.id}`}>{m.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Home