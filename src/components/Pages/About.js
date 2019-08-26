import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/aerial.jpg';
import Timeline from '../Common/Timeline';
import Projects from '../Common/Projects';


class About extends Component {
  render () {
    return (
      <div>
        <Header>
          title="Welcome to my Portfolio!"
          subtitle="It's nice to meet you"
          buttontext="Read more"
          link="/services"
          showButton={true}
          image={image}
        </Header>
        <Timeline />
        <Projects />
      </div>
    )
  }
}

export default About;