import './App.css';
import BookList from './components/BookList';
import Clicker from './components/Clicker';
import Counter from './components/Counter';

const data = [
  {
    'title': 'Random1 title1',
    'price': 'Random1 price1'
  },
  {
    'title': 'Random2 title2',
    'price': 'Random2 price2'
  },
  {
    'title': 'Random3 title3',
    'price': 'Random3 price3'
  }
]

function App() {
  return (
    <div className="App">
      <BookList data={data} />
      <Clicker />
      <Counter />
    </div>

  );
}

export default App;