import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Pricing/>
    </div>
  );
}

export default App;
