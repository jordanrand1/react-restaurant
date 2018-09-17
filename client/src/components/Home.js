import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  state = { items: [] }
  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <ul>
          { items.map( p =>
              <li key={p.id}>
                <Link to={`/items/${p.id}`}>{p.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Home