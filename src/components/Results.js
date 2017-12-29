import React, { Component } from 'react';
import Search from './Search';
import './Results.css'

class Results extends Component {
  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.language !== this.props.language ||
       prevProps.label !== this.props.label ||
       prevProps.sort !== this.props.sort ||
       prevProps.searchTerm !== this.props.searchTerm) {
      fetch(`https://api.github.com/search/issues?q=${this.props.searchTerm}+label:${this.props.label}+language:${this.props.language}+state:open&per_page=80&sort=${this.props.sort}&order=desc`)
        .then(response => response.json())
        .then(data => {
          this.props.handleUpdate(data.items)
          console.log("updated")
        })
        .catch(err => console.log(err))
    }
  }

  handleSearch(e) {
    e.preventDefault()
    const value = document.getElementById('search-input').value
    this.props.updateSearchState(value)
    document.getElementById('search-input').value = ''
  }

  clearSearch() {
    document.getElementById('search-input').value = ''
  }

  renderList() {

    function returnUrl(item) {
      if(item) {
        let str = ''
        str = item.repository_url
        str = str.replace("api.", "")
        str = str.replace("repos/", "")
        return str;
      } else {
        return false;
      }
    }

    if (this.props.isLoading) {
      return (
        <h1 className="loading">Loading...</h1>
      )
    } if (this.props.data.length > 0){
      return (
        <div>
          <div>
            <p className="showing-language">Showing results for {this.props.language || "all languages"}</p>
          </div>
          <div className="filter-search">
            <form onChange={this.props.handleSort}>
              <p>Filter results by: </p>
              <select name="sort">
                <option value="created">Newest</option>
                <option value="comments">Popularity</option>
                <option value="updated">Last Updated</option>
              </select>
            </form>
            <div className="search-container">
              <p>Searching for: <b>{this.props.searchTerm || 'n/a'}</b></p><Search clearSearch={this.clearSearch} handleSearch={this.handleSearch} />
            </div>
          </div>
          <div className="item-list">
            {this.props.data.map((item, index) => (
              <div className="card item" key={index}>
                <div className="card-content">
                   <p className="title">{item.title}</p>
                   {item.labels.map((item, index) => (
                     <p key={index} className="label-type">{item.name.toUpperCase()}</p>
                   ))}
                   <p><b>Created at</b>: {new Date(item.created_at).toLocaleString()}</p>
                </div>
                <footer className="card-footer">
                  <a className="card-link"href={returnUrl(item)}>Repo</a>
                  <a className="card-link"href={item.html_url}>Issue</a>
                </footer>
              </div>
            ))}
          </div>
        </div>
      )
    } if (this.props.data.length === 0 ) {
      return (
        <h1 className="no-results">No Results...:(</h1>
      )
    }
  }

  render() {
    const handleEmptyData = this.handleEmptyData;
    return (
      <div>
  	  { this.renderList() }
      </div>
  	)
  }

}

export default Results;
