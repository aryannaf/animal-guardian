import { Component } from 'react';
import './ExplorePage.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const API_URL = "http://localhost:5050";

class ExplorePage extends Component {

  state = {
    categories: null
  }

  componentDidMount() {
    axios
        .get(`${API_URL}/categories`)
        .then((response) => {
          this.setState({
            categories: response.data
          })
        })
        .catch(err => {
          console.log(err)
        })
  }

  render() {

    const { categories } = this.state;

    if(!categories) {
      return <main>Loading, please wait...</main>
    }

    return (
      <main>
        <div>
          <NavLink to="/animals/:speciesId">
            <button>DISCOVER</button>
          </NavLink>
          <NavLink to="/animals">
            <button>ALL</button>
          </NavLink>
          {
            categories.map((category) => {
              return (
              <NavLink to={`/categories/${category.id}`} key={category.id}>
                <button key={category.id}>{category.categoryName.toUpperCase()}</button>
              </NavLink>
              )
            })
          }
        </div>
      </main>
    )
  }
}

export default ExplorePage