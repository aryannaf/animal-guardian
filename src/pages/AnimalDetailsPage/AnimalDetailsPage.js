import { Component } from 'react';
import './AnimalDetailsPage.scss';
import axios from 'axios';
import Landscape1 from '../../components/Landscape1/Landscape1';
import Landscape2 from '../../components/Landscape2/Landscape2';
import { AdditiveAnimationBlendMode } from 'three';
import AnimalListPage from '../AnimalListPage/AnimalListPage';

import LandscapeRender from '../../components/LandscapeRender/LandscapeRender';


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

        // const renderLandscape = () => {
        //     if (animalDetails.id === 1) {
        //         return <Landscape1 />
        //     }
        //     else {
        //         return <Landscape2 />
        //     }
        // }

        
        

            return (
                <main>
                    <div>
                        <div>
                            <h1>{animalDetails.name}</h1>
                            <p>{animalDetails.scientificName}</p>
                        </div>
                        <div className="animal__landscape">
                            <LandscapeRender animal={animalDetails.id}/>
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