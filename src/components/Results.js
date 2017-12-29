import React, { Component } from 'react';
import Search from './Search';
import './Results.css'
import '../scripts';

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

    function noResults() {
      const hiddenResultsDiv = document.getElementById('no-results-hidden');
      hiddenResultsDiv.style.display = 'block';
    }

    if (this.props.isLoading) {
      return (
        <h1 className="loading">Loading...</h1>
      )
    } if (this.props.data && this.props.data.length > 0){
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
    } if (!this.props.data || this.props.data.length === 0) {
      return (
        <div className="no-results">
          <h1>No Results...:(</h1>
          <p onClick={noResults} className="hidden-results-header"><i>Seeing this often?</i></p>
          <div id="no-results-hidden">
            <p>If you're not seeing any results when you change filters, it may be because of the rate in which you're trying to access the data. This application uses Github's API in order to provide the best and latest issues for you. If you try to search different languages and labels in a short period of time, you may have exceeded the API's rate limit.</p>
            <p>You can check your rate limit on Github <a className="rate-limit-link" href="https://api.github.com/rate_limit">here</a> or try again later.</p>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
  	  { this.renderList() }
      </div>
  	)
  }

}

export default Results;
