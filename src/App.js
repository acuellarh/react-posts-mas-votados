import React, { Component } from 'react';
import posts from './posts';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {  
  
  render() {

    const list = posts
      .map((post, index) => 
        <li key={index}>
          <div className="container">
            <div className="item2">
              <a href={post.url}><img src={post.post_image_url } alt={'image of '+post.title}/></a>              
            </div>
            <div className="item3">             
              <FaAngleUp color='blue'/>
                <p>{ post.votes }</p> 
              <FaAngleDown color='blue'/>                     
            </div>
            <div className="item">
              <h4>{ post.title }</h4>
              <p>{ post.description }</p>
              <p>Escrito por {}</p>
            </div>
          </div>  
        </li>
    )          
    return (    
      <div>
        <h1>Blog posts populares</h1>
        <ul>
        {list}
        </ul>
      </div>   
    )
  }
}


export default App


