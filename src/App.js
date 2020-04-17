import React, { Component } from 'react';
import posts from './posts';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



// Modifica el componente App para implmentar la funcionalidad requerida


class App extends Component {  

  constructor(props){
    super(props)
    this.state = {    
      posts,
      bgButton1: 'primary',     
      bgButton2: 'outline-primary'      
     }
    
  }

  sortByVotesAsc(){ 
    const newBgButton1 = this.state.bgButton1 === "primary" ? "outline-primary" : "primary";
    const newBgButton2 = this.state.bgButton2 === "outline-primary" ? "primary" : "outline-primary";   
    this.setState({
      posts: posts.sort((a,b) => (a.votes - b.votes)),
      bgButton1: newBgButton1,   
      bgButton2: newBgButton2   
    });
  }

  sortByVotesDesc(){
    const newBgButton1 = this.state.bgButton1 === "primary" ? "outline-primary" : "primary";
    const newBgButton2 = this.state.bgButton2 === "outline-primary" ? "primary" : "outline-primary";   
    this.setState({   
      posts: posts.sort((a,b) => (b.votes - a.votes)),
      bgButton1: newBgButton1,   
      bgButton2: newBgButton2  
    });
  }

  handleIncrement(id, event){
    const newPosts = this.state.posts.map(post => {
      if (post.id === id){
        post.votes = post.votes + 1
        // alert("este es el nuevo valor " + post.votes);
        return post
      }
      return post
    })
    this.setState({
      pots: newPosts
    })
  }

  handleDecrement(id, event){
    const newPosts = this.state.posts.map(post => {
      if (post.id === id){
        post.votes = post.votes - 1
        // alert("este es el nuevo valor " + post.votes);
        return post
      }
      return post
    })
    this.setState({
      pots: newPosts
    })
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
              <button className="button-transparent" onClick={this.handleIncrement.bind(this, post.id)}>                
                <FaCaretUp color='blue' size='1.5em'/>
              </button>
                <p>{ post.votes }</p> 
              <button className="button-transparent" onClick={this.handleDecrement.bind(this, post.id)}>
                <FaCaretDown color='blue' size='1.5em'/>
              </button>                        
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
          <Button className="space" variant={this.state.bgButton1} size="lg" onClick={this.sortByVotesAsc.bind(this)}>Ascendente</Button>
          <Button className="space" variant={this.state.bgButton2} size="lg" onClick={this.sortByVotesDesc.bind(this)}>Descendente</Button>          
        </div>
        {list}
        </ul>
      </div>   
    )
  }
}


export default App


