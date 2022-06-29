import axios from 'axios';
import { Component } from 'react';
import './AnimalListPage.scss';
import { NavLink } from 'react-router-dom';


const API_URL = "http://localhost:5050";

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
      <main>
        <div>
          <div>
            <h1>Category:</h1>
          </div>
          <div>
            {
              species.map(animal => {
                return (
                  <NavLink to={`/animals/${animal.species_id}`} key={animal.species_id}>
                    <div key={animal.species_id}>
                      <img src={animal.image} alt="animal" />
                      <div>
                        <h5>{animal.species_name}</h5>
                        <p>{animal.scientificName}</p>
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