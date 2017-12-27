import React, { Component } from 'react';
import './Results.css'

class Results extends Component {

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.language !== this.props.language || prevProps.label !== this.props.label) {
      fetch(`https://api.github.com/search/issues?q=windows+label:${this.props.label}+language:${this.props.language}+state:open&sort=created&per_page=50`)
        .then(response => response.json())
        .then(data => {
          this.props.handleUpdate(data.items)
        })
        .catch(err => console.log(err))
    }
  }

  renderList() {

    if (this.props.isLoading) {
      return (
        <h1 className="loading">Loading...</h1>
      )
    } else {
      return (
        <div>
          <div>
            <p className="showing-language">Showing results for {this.props.language || "all languages"}</p>
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
