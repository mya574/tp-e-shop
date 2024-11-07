import logo from './logo.svg';
import './App.css';
import CreerArticle from './component/01-create-article';
import LireArticle from './component/02-lire-article/lire';
function App() {
  return (
    <div className="App">
      <CreerArticle/>
      <LireArticle/>
    </div>
  );
}

export default App;
