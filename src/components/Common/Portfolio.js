import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import imgHtml from '../assets/img/portfolio/html52.jpg';
import imgCss from '../assets/img/portfolio/css32.jpg';
import imgJs from '../assets/img/portfolio/javascript2.jpg';
import imgBootstrap from '../assets/img/portfolio/bootstrap2.jpg';
import imgGimp from '../assets/img/portfolio/gimp2.jpg';
import imgGit from '../assets/img/portfolio/github2.jpg';
import imgSql from '../assets/img/portfolio/mysql2.jpg';
import imgWp from '../assets/img/portfolio/wordpress2.jpg';
import imgReact from '../assets/img/portfolio/react2.jpg';


const portfolio = [
  {title: 'HTML5', subtitle: 'Advanced', image: imgHtml},
  {title: 'CSS3', subtitle: 'Advanced', image: imgCss},
  {title: 'JavaScript', subtitle: 'Basics', image: imgJs},
  {title: 'Bootstrap', subtitle: 'Basics', image: imgBootstrap},
  {title: 'GIMP', subtitle: 'Basics', image: imgGimp},
  {title: 'GitHub', subtitle: 'Basics', image: imgGit},
  {title: 'MySQL', subtitle: 'Basics', image: imgSql},
  {title: 'WordPress', subtitle: 'Basics', image: imgWp},
  {title: 'React', subtitle: 'Basics', image: imgReact}
  
];

class Portfolio extends Component{
  render(){
    return(
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {portfolio.map((item, index) => {
                return <PortfolioItem {...item} key={index} />
            })}
          </div>
        </div>
     </section>
    )
  }
}

export default Portfolio;