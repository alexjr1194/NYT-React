import React, { Component } from 'react';
import Search from '../Search';
import Saved from '../Saved';
import Results from '../Results';

class Home extends Component {
  state = {
    articles: [],
    saved: []
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <header>
            <h1>NYT-React Scraper</h1>
          </header>
          <Search />
          <Results results={this.state.articles} />
          <Saved saved={this.state.saved} />
        </div>
      </div>
    )
  }
}

export default Home;
