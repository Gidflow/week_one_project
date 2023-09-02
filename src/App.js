// import logo from './logo.svg';
import './App.css';
import Sedan from "./components/Sedan";
import Suv from "./components/Suv";
import Luxury from "./components/Luxury";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Sedan name="Sedans" lMore="Learn More" />
       <Suv name="Suvs" lMore="Learn More"/>
       <Luxury name="Luxury" lMore="Learn More" />
      </div>
    </div>
  );
}

export default App;
