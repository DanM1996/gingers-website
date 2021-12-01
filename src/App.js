import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Pages from './components/Pages';
import { useState } from 'react';
function App() {
  const [pages] = useState([
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'AboutMe'
    },
    {
      id: 3,
      name: 'AboutTampa'
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div>
      <Nav 
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        <Pages currentPage={currentPage}></Pages>
      </main>
      {/* <Home /> */}
    </div>
  );
}

export default App;
