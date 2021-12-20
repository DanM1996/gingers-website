import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './components/Pages/aboutme';
import AboutTampa from './components/Pages/abouttampa';
import Home from './components/Pages/home';
import LookingToSell from './components/Pages/lookingtosell';
import LookingToBuy from './components/Pages/lookingtobuy';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/aboutme' exact element={<AboutMe />} />
        <Route path='/abouttampa' exact element={<AboutTampa />} />
        <Route path='/lookingtosell' exact element={<LookingToSell />} />
        <Route path='/lookingtobuy' exact element={<LookingToBuy />} />
      </Routes>
    </Router>
  );
}

export default App;
