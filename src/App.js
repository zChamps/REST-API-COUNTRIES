import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Search from './pages/Search/Search';
import CountryDetails from './pages/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* 3 - Importar a pagina de search, não é necessario passar os argumentos da pesquisa, como ?q= */}
        <Route path="/search" element={<Search/>}/>

        <Route path='/details/:index' element={<CountryDetails/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
