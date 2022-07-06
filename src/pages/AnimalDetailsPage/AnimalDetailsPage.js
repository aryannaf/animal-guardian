import { Component } from 'react';
import './AnimalDetailsPage.scss';
import axios from 'axios';
import LandscapeRender from '../../components/LandscapeRender/LandscapeRender';


const API_URL = "https://animal-guardian-server.herokuapp.com/";

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
            <main className="animal">
                <div className="animal__container">
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

export default AnimalDetailsPage