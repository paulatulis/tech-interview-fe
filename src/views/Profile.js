import React, { Component } from 'react';
import './Profile.css';
class Profile extends Component{
  render(){
    return(
    <div class="card">
        <div class="card-header">
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple18/v4/33/21/7b/33217b15-8508-8c12-d673-65b6152728af/mzl.xpwukoki.png/246x0w.jpg" alt="winner"/>
        </div>
        <div class="card-content">
          <h3>{this.props.user.username}</h3>
          <h4>Winner winner chicken dinner</h4>
          <p>Here is where a bio could go if I want to add space for this later. For now, I will just hold the place. Maybe this is where we list previous quiz results</p>
        </div>
      </div>
    )
  }
}

export default Profile