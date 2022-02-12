import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path='/' element={<ProductList/>} />
              <Route path='/add' element={<AddProduct/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
