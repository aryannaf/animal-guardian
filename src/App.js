import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import AnimalDetailsPage from './pages/AnimalDetailsPage/AnimalDetailsPage';
import AnimalListPage from './pages/AnimalListPage/AnimalListPage';
import FullAnimalListPage from './pages/FullAnimalListPage/FullAnimalListPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/explore" component={ExplorePage}/>
        <Route path="/categories" exact component={CategoriesPage}/>
        <Route path="/categories/:categoryId" component={AnimalListPage}/>
        <Route path="/animals" exact component={FullAnimalListPage}/>
        <Route path="/animals/:speciesId" component={AnimalDetailsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
