import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import ExplorePage from './pages/ExplorePage/ExplorePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/explore" component={ExplorePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
