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

  randomize = (max) => {
    return Math.floor(Math.random() * max);
  }

  render() {

    const { categories } = this.state;

    if (!categories) {
      return <main>Loading, please wait...</main>
    }

    return (
      <main className="explore">
        <div className="explore__container">
          <p className="explore__guide">Explore wildlife species by conservation status or click <span className="explore__guide--discover">DISCOVER </span>to learn about a new animal.</p>
          <div className="explore__options">
            <NavLink to={`/animals/${this.randomize(60)}`} className="explore__button-link">
              <button className="explore__button">DISCOVER</button>
            </NavLink>
            <NavLink to="/animals" className="explore__button-link">
              <button className="explore__button">ALL</button>
            </NavLink>
            <div className="explore__categories">
              {
                categories.map((category) => {
                  return (
                    <NavLink to={`/categories/${category.id}`} key={category.id} className="explore__category-link">
                      <button key={category.id} className="explore__category">{category.categoryName.toUpperCase()}</button>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default ExplorePage