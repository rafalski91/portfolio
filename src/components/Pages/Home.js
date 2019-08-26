import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/aerial.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Projects from '../Common/Projects';
import Contact from '../Pages/Contact';
import Footer from '../Common/Footer';

class Home extends Component {
  render(){
    return(
      <div>
        <Header 
          title="Welcome to my Portfolio!"
          subtitle="It's nice to meet you"
          buttontext="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home;