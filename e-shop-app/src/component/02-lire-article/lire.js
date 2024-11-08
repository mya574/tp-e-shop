import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css'

const AfficherArticles = () => {
  const [articles, setArticles] = useState([]);

  
  useEffect(() => {// recupere les articles depuis l'api
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/article/get');
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    };

    fetchArticles();
  }, []);


  const deleteArticle = async (idArticle) => {  // supprime un article en utilisant son id
    try {
      await axios.delete(`http://localhost:8000/api/article/delete/${idArticle}`);
      setArticles((prevArticles) => prevArticles.filter((article) => article._id !== idArticle));
      alert("Article bien supprimé");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
    }
  };

  return (
    <div className='acentrer'>
      <h2>Liste des articles</h2>
      {articles.map((article) => (
        <div key={article._id} className='card'>
          <p>Nom: {article.name}</p>
          <p>Catégorie: {article.category}</p>
          <p>Marque: {article.brand}</p>
          <p>Prix: {article.price} €</p>
          <p>Description: {article.content}</p>
          <p>Stock: {article.stock}</p>
          <p>En ligne: {article.online ? 'Oui' : 'Non'}</p>
          
          <div>
            <h4>Images</h4>
            {article.picture.img && <img src={article.picture.img} alt="Image 0" />}
            {article.picture.img1 && <img src={article.picture.img1} alt="Image 1" />}
            {article.picture.img2 && <img src={article.picture.img2} alt="Image 2" />}
            {article.picture.img3 && <img src={article.picture.img3} alt="Image 3" />}
            {article.picture.img4 && <img src={article.picture.img4} alt="Image 4" />}
          </div>

          <button onClick={() => deleteArticle(article._id)}>Supprimer</button>

          <Link to={`/lirearticle/detail/${article._id}`}>Voir détails</Link>
        </div>
      ))}
    </div>
  );
};

export default AfficherArticles;
