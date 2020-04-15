import React, { Component } from 'react';
import posts from './posts';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {  

  constructor(props){
    super(props)
    this.state = { posts }    
  }

  sortByVotesAsc(){
    this.setState({
      posts: posts.sort((a,b) => (a.votes - b.votes))
    });
  }

  sortByVotesDesc(){
    this.setState({   
      posts: posts.sort((a,b) => (b.votes - a.votes))
    });
  }
  
  render() {
    const list = this.state.posts
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
              <p className="graycolor">Escrito por {}
                <img className="avatar" src={post.writer_avatar_url} alt={'avatar writer'}/>
              </p>
            </div>
          </div>  
        </li>
    )          
    return (    
      <div>
        <h1>Blog posts populares</h1>
        <ul>
        <div className="container test">
          <strong>Orden:</strong> 
          <button onClick={this.sortByVotesAsc.bind(this)}>
          Ascendente
          </button>
          <button onClick={this.sortByVotesDesc.bind(this)}>
          Descendente
          </button>
        </div>
        {list}
        </ul>
      </div>   
    )
  }
}


export default App


