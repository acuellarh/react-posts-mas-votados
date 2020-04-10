import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {  
  
  render() {

    const list = posts
      .map((post, index) =>   
        <li key={index}>
          <a href={post.url}><img src={post.image } alt={'image of '+post.title}/></a>
          <p>{ post.title }</p>
        </li>
    )          
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}


export default App


