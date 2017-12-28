import React, { Component } from 'react';
import Search from './Search';
import './Results.css'

class Results extends Component {
  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.language !== this.props.language ||
       prevProps.label !== this.props.label ||
       prevProps.sort !== this.props.sort ||
       prevProps.searchTerm !== this.props.searchTerm) {
      fetch(`https://api.github.com/search/issues?q=${this.props.searchTerm}+label:${this.props.label}+language:${this.props.language}+state:open&sort=${this.props.sort}&per_page=80`)
        .then(response => response.json())
        .then(data => {
          this.props.handleUpdate(data.items)
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

  renderList() {

    if (this.props.isLoading) {
      return (
        <h1 className="loading">Loading...</h1>
      )
    } else if (!this.props.data){
      return (
        <h1 className="loading">No results :(...</h1>
      )
    } else {
      return (
        <div>
          <div>
            <p className="showing-language">Showing results for {this.props.language || "all languages"}</p>
          </div>
          <div className="filter-search">
            <form onChange={this.props.handleSort}>
              <p>Filter results by: </p>
              <select name="sort">
                <option value="stars">Popularity</option>
                <option value="created">Newest</option>
              </select>
            </form>
            <div className="search-container">
              <p>Searching for: <b>{this.props.searchTerm || 'n/a'}</b></p><Search handleSearch={this.handleSearch} />
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
                  <p className="card-footer-item">
                    <span>
                      <a className="card-link" href={item.repository_url}>Repo</a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a className="card-link" href={item.html_url}>Issue</a>
                    </span>
                  </p>
                </footer>
              </div>
            ))}
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
