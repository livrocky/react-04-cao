import './App.css';
import ProductsList from './components/ProductCard';

function App() {
  return (
    <div className='App container'>
      <header className='App-header'>
        <h1>Hello World</h1>
        <ProductsList />
      </header>
    </div>
  );
}

export default App;
