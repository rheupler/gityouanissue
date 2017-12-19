import React, { Component } from 'react';
import './App.css';

import Labels from './components/Labels';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      results: [],
      label: 'bug',
      language: 'javascript'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e.target.value)
    this.setState({ language: e.target.value })
  }

  componentWillMount() {
    fetch(`https://api.github.com/search/issues?q=windows+label:${this.state.label}+language:${this.state.language}+state:open&sort=created&order=asc`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items)
        this.setState({ results: data.items, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Labels
          handleClick={this.handleClick}
        />
        <Results
          data={this.state.results}
          isLoading={this.state.isLoading}
          language={this.state.language}
          label={this.state.label}
        />
      </div>
    );
  }
}

export default App;
