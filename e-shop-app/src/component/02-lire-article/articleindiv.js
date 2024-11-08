import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css'

const DetailArticle = () => {
  const { id } = useParams(); // recupere l'id de l'url
  const [article, setArticle] = useState(null);

  
  useEffect(() => {// charger l'article avec l'id depuis l'api
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/article/get/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Chargement...</p>;
  }

  return (
    <div className='acentrer card' >
      <h2>Détails de l'article</h2>
      <p>Nom: {article.name}</p>
      <p>Catégorie: {article.category}</p>
      <p>Marque: {article.brand}</p>
      <p>Prix: {article.price} €</p>
      <p>Description: {article.content}</p>
      <p>Stock: {article.stock}</p>
      <p>En ligne: {article.online ? 'Oui' : 'Non'}</p>
      
      <h4>Images</h4>
      {article.picture.img && <img src={article.picture.img} alt="Image 0" />}
      {article.picture.img1 && <img src={article.picture.img1} alt="Image 1" />}
      {article.picture.img2 && <img src={article.picture.img2} alt="Image 2" />}
      {article.picture.img3 && <img src={article.picture.img3} alt="Image 3" />}
      {article.picture.img4 && <img src={article.picture.img4} alt="Image 4" />}
    </div>
  );
};

export default DetailArticle;
