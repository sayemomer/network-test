import React, { Component } from 'react';
import './App.css';
import images from './image'
import NetworkDetector from './network';

class App extends Component {
  renderImage() {
    return (
      <div className='image-list'>
        {images.map(data => <img src={data.image} alt='random' key={data.id} className="image" />)}
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <p className="page-title">The iDrag Imagery</p>
        {this.renderImage()}
      </div>
    );
  }
}

export default NetworkDetector(App);