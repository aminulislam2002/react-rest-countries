import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Display every country details in the world!!!</h1>
//       <p>Total number off Country: {countries.length}</p>
//       {countries.map((country) => (
//         <Country name={country.name.common}  capital={country.capital}></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Capital: {props.capital}</h2>
//     </div>
//   );
// }

export default App;
