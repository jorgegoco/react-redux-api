import { Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
