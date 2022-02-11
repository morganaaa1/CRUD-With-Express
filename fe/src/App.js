import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default App;
