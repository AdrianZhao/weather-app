import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Detail from './components/Detail';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
function App() {
  return (
    <Router>
      <header>
        <Header title="Weather-App"/>
      </header>
      <main>
        <div className='container'>
          <Routes>
            <Route exact path="/weather-app" element={<Catalog />}/>
            <Route exact path='/city/:cityname' element={<Detail />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
export default App;
