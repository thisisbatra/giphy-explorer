import './App.css';
import DefaultResultBox from './Components/DefaultResultBox/DefaultResultBox';
import Head from './Components/Head/Head';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchedResultBox from './Components/SearchedResultBox/SearchedResultBox';

function App() {
  return (
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path='/' element={<DefaultResultBox/>}/>
          <Route path='/SearchedResultBox' element={<SearchedResultBox/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
