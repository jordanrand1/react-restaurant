import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Item extends React.Component {
  state = { items: [] }
  componentDidMount() {
    axios.get('/api/menus/1/items')
      .then( res => this.setState({ items: res.data }) )
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Items</h1>
        <ul>
          { items.map( i =>
              <li key={i.id}>
                <Link to={`/menus/${i.id}`}>{i.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Item