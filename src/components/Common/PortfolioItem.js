import React, {Component} from 'react';

class PortfolioItem extends Component{
  render(){
    return(
      <div className="col-md-4 col-sm-6 portfolio-item">
      <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
          </div>
        </div>
        <img className="img-fluid" src={this.props.image} alt="logo" />
      </a>
      <div className="portfolio-caption">
        <h4>{this.props.title}</h4>
        <p className="text-muted">{this.props.subtitle}</p>
      </div>
    </div>
    )
  }
}

export default PortfolioItem;