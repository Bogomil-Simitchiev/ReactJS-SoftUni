import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Movies } from './components/Movies';
import { Details } from './components/Details';

function App() {
  return (
    <div className="App">
      <h1>Hello from React Router!</h1>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<Details />} />

      </Routes>
      
    </div>
  );
}

export default App;
