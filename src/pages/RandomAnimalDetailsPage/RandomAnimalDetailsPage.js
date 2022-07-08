import { Component } from 'react';
import './RandomAnimalDetailsPage.scss';
import axios from 'axios';
import LandscapeRender from '../../components/LandscapeRender/LandscapeRender';
import { NavLink } from 'react-router-dom';


const API_URL = "https://animal-guardian-server.herokuapp.com";

class RandomAnimalDetailsPage extends Component {

    state = {
        animalDetails: null
    }

    componentDidMount() {
        this.getRandomAnimal(this.props.match.params.speciesId);
    }

    componentDidUpdate(prevProps) {
        const prevAnimalId = prevProps.match.params.speciesId;
        const currentAnimalId = this.props.match.params.speciesId;

        if (prevAnimalId !== currentAnimalId) {
            this.getRandomAnimal(currentAnimalId);
        }
    }

    getRandomAnimal = (speciesId) => {
        axios
            .get(`${API_URL}/species/random/${speciesId}`)
            .then((response) => {
                this.setState({
                    animalDetails: response.data[0]
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    randomize = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    render() {

        const { animalDetails } = this.state;

        if (!animalDetails) {
            return <main>Loading, please wait...</main>;
        }

        return (
            <main className="animal">
                <div className="animal__container">
                    <NavLink to={`/animals/random/${this.randomize(1, 62)}`} className="animal__discover-link">
                        <button className="animal__discover">DISCOVER</button>
                    </NavLink>
                    <div className="animal__heading">
                        <h1 className="animal__name">{animalDetails.name}</h1>
                        <p className="animal__scientific-name">{animalDetails.scientificName}</p>
                    </div>
                    <div className="animal__landscape">
                        <div className="line right">
                            <div className="scanner"></div>
                        </div>
                        <LandscapeRender animal={animalDetails.id} />
                    </div>
                    <div className="animal__stats">
                        <p className="animal__status">{animalDetails.category}</p>
                        <p className="animal__population">Population: {animalDetails.population}</p>
                        <p className="animal__habitat">Habitat: {animalDetails.habitat}</p>
                    </div>
                    <div className="animal__bio">
                        <div className="line right">
                            <div className="scanner"></div>
                        </div>
                        <p className="animal__description">{animalDetails.information}</p>
                        <p className="animal__source">Source: {animalDetails.source}</p>
                    </div>
                    <div className="animal__help">
                        <h4 className="animal__help__title">HOW TO HELP</h4>
                        <div className="animal__help__resources">
                            <a href={animalDetails.petition} target="_blank" className="animal__help__link">
                                <button className="animal__help__button">PETITION</button>
                            </a>
                            <a href={animalDetails.donate} target="_blank" className="animal__help__link">
                                <button className="animal__help__button">DONATE</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        )

    }
}

export default RandomAnimalDetailsPage