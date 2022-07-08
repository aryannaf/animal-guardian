import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import AnimalDetailsPage from './pages/AnimalDetailsPage/AnimalDetailsPage';
import AnimalListPage from './pages/AnimalListPage/AnimalListPage';
import FullAnimalListPage from './pages/FullAnimalListPage/FullAnimalListPage';
import Footer from './components/Footer/Footer';
import RandomAnimalDetailsPage from './pages/RandomAnimalDetailsPage/RandomAnimalDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/explore" component={ExplorePage}/>
        <Route path="/categories/:categoryId" component={AnimalListPage}/>
        <Route path="/animals" exact component={FullAnimalListPage}/>
        <Route path="/animals/:speciesId" exact component={AnimalDetailsPage}/>
        <Route path="/animals/random/:speciesId" component={RandomAnimalDetailsPage}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
