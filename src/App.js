import './App.css';
import Nav from './components/Nav';
import Pages from './components/Pages';
import { useState } from 'react';
function App() {
  const [pages] = useState([
    {
      id: 1,
      name: 'Home'
    },
    {
      id :2,
      name: 'About'
    },
    {
      id: 3,
      name: 'About Me'
    },
    {
      id: 4,
      name: 'About Tampa Bay'
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
    </div>
  );
}

export default App;
