import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CreerArticle from './component/01-create-article';
import LireArticle from './component/02-lire-article/lire';
import Header from './component/navbar/header';
import Erreur from './component/navbar/erreur';
import DetailArticle from './component/02-lire-article/articleindiv';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route path='/creerarticle' element={<CreerArticle/>}/>
      <Route path='/lirearticle' element={<LireArticle/>}/>
      <Route path="/lirearticle/detail/:id" element={<DetailArticle />} />
      <Route path='*' element={<Erreur/>}/>
      </Route>
    </Routes>
  );
}

export default App;
