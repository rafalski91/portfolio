import React, {Component} from 'react';

class ProjectsItem extends Component{
  render(){
    return(
      <div className="col-sm-4">
          <div className="team-member">
            <a href={this.props.url}>
            <img className="mx-auto rounded-circle" src={this.props.image} alt="foto" />
            </a>
            <h4>{this.props.title}</h4>
            <p className="text-muted">{this.props.subtitle}</p>
          </div>
        </div>
    )
  }
}

export default ProjectsItem;