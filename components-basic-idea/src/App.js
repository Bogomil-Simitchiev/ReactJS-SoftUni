import './App.css';
import BookList from './components/BookList';

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
      <BookList data={data}/>
    </div>
  );
}

export default App;