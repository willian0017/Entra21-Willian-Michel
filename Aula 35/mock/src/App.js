import './App.css';
import {FilterableProductTable} from "./components/FilterableProductTable"
import {ProductTable} from "./components/ProductTable"
import {SearchBar} from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <FilterableProductTable/>
      <ProductTable/>
      <SearchBar/>
    </div>
  );
}

export default App;
