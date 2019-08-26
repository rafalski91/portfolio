import React, {Component} from 'react';

class Timeline extends Component{
  render(){
    return(
      <section class="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2011-2017</h4>
                      <h4 className="subheading">My Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                          2011 End of high school, a one year to plan the next steps (driving license B, first small project in html / css). 
                        <br />2012 finding a job (order picker) abroad (Netherlands) and quitting html / css. 
                        <br />2017 return to Poland and move to Warsaw.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2017-2019</h4>
                      <h4 className="subheading">Looking myself</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                          2017 At the beginning I started as a receptionist in hotels. 
                        <br />2018 the next step is a new job as a receptionist in the office and I joined the weekend school for IT technician.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2019</h4>
                      <h4 className="subheading">The passion is back!</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        2019 a new year - old me. IT technician it was good start, ignited my passion for coding again. I quitt my job and started learning HTML/ CSS/ PHP/ SQL at home by myself and applied for the Front End Developer course at CodersTrust.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2019</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                          2019 Three months Front End Developer course (01.06-31.08) learning HTML/ CSS/ RWD/ Bootstrap/ JavaScript/ React/ GIMP/ GitHub/ Wordpress and making three projects by myself. 
                        <br /><b>Status: Unemployed. Looking first job from 01-14.09</b>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                        Be Part
                      <br />Of My
                      <br />Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Timeline;