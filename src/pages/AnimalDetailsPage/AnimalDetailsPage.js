import { Component } from 'react';
import './AnimalDetailsPage.scss';
import axios from 'axios';
import Landscape from '../../components/Landscape/Landscape';


const API_URL = "http://localhost:5050";

class AnimalDetailsPage extends Component {

    state = {
        animalDetails: null
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/species/${this.props.match.params.speciesId}`)
            .then((response) => {
                this.setState({
                    animalDetails: response.data[0]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const { animalDetails } = this.state;

        if (!animalDetails) {
            return <main>Loading, please wait...</main>;
        }

        return (
            <main>
                <div>
                    <div>
                        <h1>{animalDetails.name}</h1>
                        <p>{animalDetails.scientificName}</p>
                    </div>
                    <div>
                        <Landscape />
                    </div>
                    <div>
                        <div>
                            <p>{animalDetails.category}</p>
                            <p>Population: {animalDetails.population}</p>
                            <p>Habitat: {animalDetails.habitat}</p>
                        </div>
                        <div>
                            <p>{animalDetails.information}</p>
                            <p>Source: {animalDetails.source}</p>
                        </div>
                        <div>
                            <h4>HOW TO HELP</h4>
                            <div>
                                <a href={animalDetails.petition}>
                                    <button>PETITION</button>
                                </a>
                                <a href={animalDetails.donate}>
                                    <button>DONATE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default AnimalDetailsPage