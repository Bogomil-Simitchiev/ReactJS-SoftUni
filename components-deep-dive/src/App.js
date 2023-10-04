import './App.css';
import BookList from './components/BookList';

const data = [
  {
    'title': 'Random1 title1',
    'price': 'Random1 price1',
    'author': 'Random1 author1'

  },
  {
    'title': 'Random2 title2',
    'price': 'Random2 price2',
    'author': 'Random2 author2'

  },
  {
    'title': 'Random3 title3',
    'price': 'Random3 price3',
    'author': 'Random3 author3'

  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={data} />
      </header>
    </div>
  );
}

export default App;
