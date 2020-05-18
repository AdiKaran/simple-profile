import React, {Component} from 'react' ;
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return (
          <div>
            <Grid style={{ position: "fixed" }}>
              <Cell col={4}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://img.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg?size=338&ext=jpg"
                    alt="avatar"
                    style={{ height: "200px" }}
                  />
                </div>

                <h2 style={{ paddingTop: "2em" }}> My Name</h2>
                <h4 style={{ color: "grey" }}>Programmer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum tempora beatae minima saepe odio delectus, laudantium
                  voluptatem! Corporis dignissimos praesentium commodi sit
                  accusantium quas sed et nulla, nihil perspiciatis non.
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>My Address, 474747</p>
                <h5>Phone</h5>
                <p>(123)456-7890</p>
                <h5>Email</h5>
                <p>foo@bar.com</p>
                <h5>Web</h5>
                <p>MySite.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education
                  startYear={2016}
                  endYear={2020}
                  schoolName="EC"
                  schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta necessitatibus aspernatur suscipit ipsum quasi saepe excepturi iste libero velit nulla, aliquam, cum eos totam, explicabo tempore laudantium id iure?"
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Experience</h2>
                <Experience
                  startYear={2018}
                  endYear={2020}
                  jobName="My Job"
                  jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta necessitatibus aspernatur suscipit ipsum quasi saepe excepturi iste libero velit nulla, aliquam, cum eos totam, explicabo tempore laudantium id iure?"
                />
                <Experience
                  startYear={2016}
                  endYear={2018}
                  jobName="Other Job"
                  jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta necessitatibus aspernatur suscipit ipsum quasi saepe excepturi iste libero velit nulla, aliquam, cum eos totam, explicabo tempore laudantium id iure?"
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Skills</h2>
                <Skills skill="Javascript" skillPercent={99} />
                <Skills skill="React" skillPercent={75} />
                <Skills skill="Python" skillPercent={100} />
              </Cell>
            </Grid>
          </div>
        );
    }

}

export default Resume ;