import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './components/Pages/aboutme';
import AboutTampa from './components/Pages/abouttampa';
import Home from './components/Pages/home';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/aboutme' exact element={<AboutMe />} />
        <Route path='/abouttampa' exact element={<AboutTampa />} />
      </Routes>
    </Router>
  );
}

export default App;
