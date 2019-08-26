import React, {Component} from 'react';
import ProjectsItem from '../Common/ProjectsItem';

import projectHtml from '../assets/img/projects/ProjectHtml.jpg';
import projectJavaScript from '../assets/img/projects/ProjectJavaScript.jpg';
import projectReact from '../assets/img/projects/ProjectReact.jpg';

const projects = [
  {title: 'Single One Page', subtitle: 'HTML5, CSS3, jQuery, RWD', image: projectHtml, url:'https://rafalski91.github.io/Project-html-css/'},
  {title: 'Quest List', subtitle: 'JavaScript, RWD, API', image: projectJavaScript, url: 'https://rafalski91.github.io/Project-JavaScript/'},
  {title: 'Portfolio', subtitle: 'JavaScript, RWD, React, HTML5, CSS3', image: projectReact, url: '#'}
];

class Projects extends Component{
  render(){
    return(
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">My Projects</h2>
            <h3 className="section-subheading text-muted">Projects are the best way to train and show my skills where everyday I have to read documentation to improve it.</h3>
          </div>
        </div>
        <div className="row">

          {projects.map((project, i) => {
              return <ProjectsItem {...project} key={i} />
          })}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">First, I create one page websites using html and css with JavaScript or jQuery. Obviously there is a lot of documentation to learn, that's why I'm constantly trying to do new projects or develop current ones, I focus mainly on JavaScript and React. I participate in a project where I develop skills to create e-comerce websites on the WordPress management system.</p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Projects;