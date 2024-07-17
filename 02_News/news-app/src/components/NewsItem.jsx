import React, { Component } from "react";
import '../index.css'

export class NewsItem extends Component {
  render() {
    let {title, description, imgURL, newsURL} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem", height: "25rem", overflow: 'overlay',}}>
          <img src={imgURL} className="card-img-top" style={{height: '10rem', backgroundSize: 'cover'}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsURL?"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":newsURL} target="_blank" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
