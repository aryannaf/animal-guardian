import { Component } from 'react';
import './ExplorePage.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';


const API_URL = "https://animal-guardian-server.herokuapp.com";

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

  randomize = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {

    const { categories } = this.state;

    if (!categories) {
      return <main><Loading /></main>;
    }

    return (
      <main className="explore">
        <div className="explore__container">
          <p className="explore__guide">Explore wildlife species by conservation status or click <span className="explore__guide--discover">DISCOVER </span>to learn about a new animal.</p>

          <div className="explore__wrapper">
            <ul className="explore__circle-container">
              {
                categories.map((category) => {
                  return (
                    <li className="explore__item" key={category.id}>
                      <NavLink to={`/categories/${category.id}`} className="explore__category-link">
                        <button key={category.id} className="explore__category">{category.categoryName.toUpperCase()}</button>
                      </NavLink>
                    </li>
                  )
                })
              }
              <li className="explore__item">
                <NavLink to="/animals" className="explore__button-link">
                  <button className="explore__button">ALL</button>
                </NavLink>
              </li>
              <li className="explore__item">
                <NavLink to={`/animals/random/${this.randomize(1, 62)}`} className="explore__button-link">
                  <button className="explore__button">DISCOVER</button>
                </NavLink>
              </li>
            </ul>
            <div className="container">
              <button className="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                  <g fill="none" fillRule="evenodd">
                    <circle className="inner-circle" cx="60" cy="60" r="39" fill="#FFFFFF30" />
                    <path className="menu-button" fill="#9B9B9B" fillRule="nonzero" d="M58.486 56.324H57.19c-.48 0-.866.387-.866.865v1.29c0 .48.387.86.865.86h1.29c.48 0 .86-.39.86-.87v-1.29c0-.48-.39-.87-.87-.87zm-4.324 0h-1.297c-.478 0-.865.387-.865.865v1.29c0 .48.387.86.865.86h1.297c.478 0 .865-.39.865-.87v-1.29c0-.48-.387-.87-.865-.87zM58.486 52H57.19c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.324 0h-1.297c-.478 0-.865.387-.865.865v1.297c0 .478.387.865.865.865h1.297c.478 0 .865-.387.865-.865v-1.297c0-.478-.387-.865-.865-.865zm12.973 4.324h-1.297c-.478 0-.865.387-.865.865v1.29c0 .48.387.86.865.86h1.297c.478 0 .865-.39.865-.87v-1.29c0-.48-.387-.87-.865-.87zm-4.324 0h-1.29c-.48 0-.86.387-.86.865v1.29c0 .48.39.86.87.86h1.3c.48 0 .87-.39.87-.87v-1.29c0-.48-.38-.87-.86-.87zM67.14 52h-1.3c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.324 0H61.52c-.48 0-.865.387-.865.865v1.297c0 .478.386.865.865.865h1.297c.48 0 .866-.387.866-.865v-1.297c0-.478-.386-.865-.864-.865zM58.49 64.973h-1.3c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.325 0h-1.297c-.478 0-.865.387-.865.865v1.297c0 .478.387.865.865.865h1.297c.478 0 .865-.387.865-.865v-1.297c0-.478-.388-.865-.866-.865zm4.324-4.324h-1.3c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.48 0 .86-.39.86-.87V61.5c0-.48-.39-.864-.87-.864zm-4.33 0h-1.3c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.472 0 .86-.39.86-.87V61.5c0-.48-.39-.864-.867-.864zm12.97 4.32h-1.29c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.48 0 .86-.39.86-.87v-1.29c0-.48-.387-.87-.865-.87zm-4.33 0h-1.29c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.3c.48 0 .862-.39.862-.87v-1.29c0-.48-.39-.87-.867-.87zm4.32-4.33h-1.3c-.48 0-.87.38-.87.86v1.3c0 .48.384.86.862.86h1.3c.476 0 .863-.39.863-.87V61.5c0-.48-.388-.864-.866-.864zm-4.33 0H61.5c-.48 0-.864.38-.864.86v1.3c0 .48.387.86.866.86H62.8c.48 0 .87-.39.87-.87V61.5c0-.48-.383-.864-.86-.864z" />
                    <g className="outer-circle">
                      <circle cx="60" cy="60" r="53" stroke="#9B9B9B" transform="rotate(90 60 60)" />
                      <circle cx="60" cy="7" r="2" fill="#9B9B9B" />
                      <circle cx="60" cy="113" r="2" fill="#9B9B9B" />
                      <circle cx="113" cy="60" r="2" fill="#9B9B9B" />
                      <circle cx="7" cy="60" r="2" fill="#9B9B9B" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main >
    )
  }
}

export default ExplorePage