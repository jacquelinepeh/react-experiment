// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        { /*Children is a special property that React provides to every component and allows to nest components one inside another.*/ }
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}