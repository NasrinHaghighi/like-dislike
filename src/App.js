
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:100,
      dislikes:25,
      addlikes:false,
      adddislike:false,
    };
    this.userlike=this.userlike.bind(this)
    this.userdislike=this.userdislike.bind(this)
  }

  /*user like fun*/
  userdislike(){
 
    if(this.state.adddislike){
      this.setState({
        dislikes:this.state.dislikes -1,
        adddislike:(false)
       })
    } if(this.state.addlikes){
      this.setState({
        likes:this.state.likes -1,
        addlikes:(false)
       })

    }if(!this.state.adddislike){
      this.setState({
        dislikes:this.state.dislikes +1,
        adddislike:(true)
       })
    }

  }

  userlike(){
    if(!this.state.addlikes){
    this.setState({
     likes:this.state.likes +1,
     addlikes:true,

    })}if(this.state.adddislike){
      this.setState({
        dislikes:this.state.dislikes -1,
        adddislike:(false)
       })
    }
    
    if(this.state.addlikes){
      this.setState({
        likes:this.state.likes -1,
        addlikes:false,
       })
    }
 
     }

  render() {
    console.log('likes:'+ this.state.likes , 'dislikes: '+this.state.dislikes , 'addlikes: '+this.state.addlikes ,)
    console.log()
    return (
      <>
      <div>
        <h2>Like Dislike</h2>
      </div>
      <style>{`
        .like-button, .dislike-button{
          font-size:1rem;
          padding:5px 10px;
          color:#5858
        }
        .liked , .disliked{
          font-weight:blod;
          color:#1565c0
        }
        
          
        }`}</style>
        <button className={`like-button ${this.state.addlikes ? 'liked' : ''}`} onClick={this.userlike}>Like|<span className='likes-counter'>{this.state.likes}</span></button>
        <button className={`dislike-button ${this.state.adddislike ? 'disliked' : ''}`}
        onClick={this.userdislike}>Dislike|<span className='dislikes-counter'>{this.state.dislikes}</span></button>
      </>
    );
  }
}

export default App;
