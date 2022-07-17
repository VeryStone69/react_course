import './App.css';
import Header from './Header';
import Home from './Home';
import Category from './Category';
import CategoryDiscription from './CategoryDiscription';
import About from './About';
import Footer from './Footer';
import Error404 from './Error404';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category />} />
          <Route path="/cat/:categoryName" element={<CategoryDiscription />} />
          <Route path='*' element={<Error404 />} />
        </Routes>

      </Router>
      <Footer />

    </>
  );
}

export default App;
