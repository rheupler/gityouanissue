import React, { Component } from 'react';
import './Results.css'

class Results extends Component {



  renderList() {
    if (this.props.isLoading) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div>
          <div>
            <p>Showing results for: {this.props.language}</p>
          </div>
          <ul className="item-list">
            {this.props.data.map((item, index) => (
              <div className="item column" key={index}>
          	   <li>{item.body}</li>
               <a href={item.html_url}>Link to issue</a>
               <li>{item.labels[0].name}</li>
              </div>
            ))}
          </ul>
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
