import React, { useState } from 'react';
import axios from 'axios';

const CreerArticle = () => {
  const [article, setArticle] = useState({
    name: '',
    category: '',
    brand: '',
    price: '',
    content: '',
    stock: '',
    online: false,
    picture: {
      img: '',
      img1: '',
      img2: '',
      img3: '',
      img4: ''
    }
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setArticle((prevArticle) => ({
        ...prevArticle,
        [name]: checked
      }));
    } else if (name.startsWith('img')) { 
      setArticle((prevArticle) => ({
        ...prevArticle,
        picture: {
          ...prevArticle.picture,
          [name]: value
        }
      }));
    } else {
      setArticle((prevArticle) => ({
        ...prevArticle,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Envoie l'article à l'API
      const response = await axios.post('http://localhost:8000/api/article/add', article);
      console.log('Article créé avec succès:', response.data);
  
      // Vide le formulaire après l'envoi de l'article
      setArticle({
        name: '',
        category: '',
        brand: '',
        price: '',
        content: '',
        stock: '',
        online: false,
        picture: {
          img: '',
          img1: '',
          img2: '',
          img3: '',
          img4: ''
        }
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'article:", error);
    }
  };
  

  return (
    <div>
      <h2>Créer un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={article.name}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          value={article.category}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="brand">Brand: </label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand"
          value={article.brand}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={article.price}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="content">Content: </label>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Content"
          value={article.content}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="stock">Stock: </label>
        <input
          type="number"
          id="stock"
          name="stock"
          placeholder="Stock"
          value={article.stock}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="online">Online: </label>
        <input
          type="checkbox"
          id="online"
          name="online"
          checked={article.online}
          onChange={handleChange}
        />
        <br/>
        
        <label htmlFor="img">Image 0: </label>
        <input
          type="text"
          id="img"
          name="img"
          placeholder="Image URL"
          value={article.picture.img}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="img1">Image 1: </label>
        <input
          type="text"
          id="img1"
          name="img1"
          placeholder="Image 1 URL"
          value={article.picture.img1}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="img2">Image 2: </label>
        <input
          type="text"
          id="img2"
          name="img2"
          placeholder="Image 2 URL"
          value={article.picture.img2}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="img3">Image 3: </label>
        <input
          type="text"
          id="img3"
          name="img3"
          placeholder="Image 3 URL"
          value={article.picture.img3}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="img4">Image 4: </label>
        <input
          type="text"
          id="img4"
          name="img4"
          placeholder="Image 4 URL"
          value={article.picture.img4}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreerArticle;
