import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CreerArticle from './component/01-create-article';
import LireArticle from './component/02-lire-article/lire';
import Header from './component/navbar/header';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route path='/creerarticle' element={<CreerArticle/>}/>
      <Route path='/lirearticle' element={<LireArticle/>}/>
      </Route>
    </Routes>
  );
}

export default App;
