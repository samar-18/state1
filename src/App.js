
import './App.css';
import React, { Component } from 'react'
import Livecycle from './Livecycle';

class App extends Component {


state= {
  person:{fullName:'Samar Ben Zeineb',bio:"I am a student Full Stack JS in Go My Code", mgSrc:<img className="photo" src= "/samar.jpg" alt="myphoto" />,profession:"I have a degree in computer science"},
  showme:'false',
 
  }
 
  operation(){

    this.setState({
      showme:!this.state.showme
    })
  }

  render() {
    return (
      <div>
       
           <button className="But" onClick={()=>this.operation()}>This is my profile</button>
          
            {!this.state.showme?
              <div className="container">

                <div className="profile">
                <Livecycle/>
         <h1>My Name is {this.state.person.fullName}</h1>
         <h1>  {this.state.person.bio}</h1>
         <h1>  {this.state.person.profession}.</h1>
         </div>
         <div> {this.state.person.mgSrc} </div>
        
         
         </div>

 :null }
     </div>
    )
  }
}

export default App;
