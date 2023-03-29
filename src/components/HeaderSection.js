import './HeaderSection.css'
import React, { Component } from 'react'

export class HeaderSection extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-typing-container">
          <h1 className="personal-info">Erika</h1>
          <div className="writing-container"></div>
          <h1 className="personal-info">Bianchi</h1>
        </div>
        <div className="header-picture-simulator"></div>
      </div>
    )
  }
}

export default HeaderSection
