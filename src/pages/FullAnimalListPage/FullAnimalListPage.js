import { Component } from 'react';
import './FullAnimalListPage.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const API_URL = "http://localhost:5050";

class FullAnimalListPage extends Component {

    state = {
        species: null
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/species`)
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
                        <h1>ALL</h1>
                    </div>
                    <div>
                        {
                            species.map((animal) => {
                                return (
                                    <NavLink to={`/animals/${animal.id}`} key={animal.id}>
                                        <div key={animal.id}>
                                            <img src={animal.image} alt="animal" />
                                            <div>
                                                <h5>{animal.name}</h5>
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

export default FullAnimalListPage