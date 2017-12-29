import React, { Component } from 'react';
import './App.css';
import './scripts.js'
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
      sort: 'created',
      language: '',
      searchTerm: ''
    }
    this.handleLangChange = this.handleLangChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleLabelChange = this.handleLabelChange.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.updateSearchState = this.updateSearchState.bind(this)
  }

  handleLangChange(e) {
    this.setState({ language: e.target.value, searchTerm: '' })
  }

  handleLabelChange(e) {
    this.setState({ label: e.target.value, searchTerm: '' })
  }

  handleUpdate(prop) {
    this.setState({ results: prop, isLoading: false })
  }

  handleSort(e) {
    this.setState({ sort: e.target.value })
  }

  updateSearchState(props) {
    this.setState({ searchTerm: props })
  }

  componentWillMount() {
    fetch(`https://api.github.com/search/issues?q=bug+label:${this.state.label}+language:${this.state.language}+state:open&per_page=80&sort=${this.state.sort}&order=desc`)
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
          sort={this.state.sort}
          searchTerm={this.state.searchTerm}
          handleUpdate={this.handleUpdate}
          handleSort={this.handleSort}
          updateSearchState={this.updateSearchState}
        />
      </div>
    );
  }
}

export default App;
