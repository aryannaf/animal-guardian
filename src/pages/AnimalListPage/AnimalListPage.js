import axios from 'axios';
import { Component } from 'react';
import './AnimalListPage.scss';
import { NavLink } from 'react-router-dom';


const API_URL = "https://animal-guardian-server.herokuapp.com";

class AnimalListPage extends Component {

  state = {
    species: null
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/categories/${this.props.match.params.categoryId}`)
      .then((response) => {
        this.setState({
          species: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {

    const { species } = this.state;

    if (!species) {
      return <main>Loading, please wait...</main>;
    }

    return (
      <main className="species">
        <div className="species__container">
          <div className="species__title">
            <h1 className="species__category">{species[0].category.toUpperCase()}</h1>
          </div>
          <div className="species__list">
            {
              species.map(animal => {
                return (
                  <NavLink to={`/animals/${animal.species_id}`} key={animal.species_id} className="species__animal-link">
                    <div key={animal.species_id} className="species__animal">
                      <img src={animal.image} alt="animal" className="species__animal__image"/>
                      <div className="species__animal__info">
                        <h5 className="species__animal__name">{animal.species_name}</h5>
                        <p className="species__animal__scientific-name">{animal.scientificName}</p>
                      </div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
        </div>
      </main>
    )
  }
}

export default AnimalListPage