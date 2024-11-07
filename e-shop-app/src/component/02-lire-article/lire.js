import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AfficherArticles = () => {
  const [articles, setArticles] = useState([]);

  // recupere les article depuis l'api
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/article/get'); // on cherche les articles dans la bdd
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // on supprime un article a l'aide de son id 
  const deleteArticle = async (idArticle) => {
    try {
      await axios.delete(`http://localhost:8000/api/article/delete/${idArticle}`);// on supprime l'article de l'api
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== idArticle));//mise a jour de l'article supprime

      alert("Article bien supprimé");
    } catch (error) {
      console.error("Erreur lors de la suppression de l article :", error);
    }
  };

  return (
    <div>
      <h2>Liste des articles</h2>
      {
        articles.map((article, index) => (
          <div key={index}>
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
            <button onClick={() => deleteArticle(article._id)} >Supprimer</button>
          </div>
        ))
      }
    </div>
  );
};

export default AfficherArticles;
