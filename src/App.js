import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Labels from './components/Labels';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      results: [],
      label: 'bug',
      language: ''
    }
    this.handleLangChange = this.handleLangChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleLabelChange = this.handleLabelChange.bind(this)
  }

  handleLangChange(e) {
    this.setState({ language: e.target.value })
  }

  handleLabelChange(e) {
    this.setState({ label: e.target.value })
  }

  handleUpdate(prop) {
    this.setState({ results: prop, isLoading: false })
  }

  componentWillMount() {
    fetch(`https://api.github.com/search/issues?q=windows+label:${this.state.label}+language:${this.state.language}+state:open&starred?sort=created&per_page=50&direction=asc`)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.items, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Labels
          handleLangChange={this.handleLangChange}
          handleLabelChange={this.handleLabelChange}
        />
        <Results
          data={this.state.results}
          isLoading={this.state.isLoading}
          language={this.state.language}
          label={this.state.label}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
