import React, { Component } from "react";
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
                className="avatar-image"
                src="https://img.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg?size=338&ext=jpg"
                alt="Avater"
            />
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr/>
                <p>HTML/CSS| JavaScript | React | NodeJS | Python | C </p>

                <div className="social-links">
                    {/* Linkedin */}
                    <a href="www.google.com/" rel="noopener noreferer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>    

                    {/* GitHub */}
                    <a href="www.google.com/" rel="noopener noreferer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>  

                    {/* freeCodeCamp */}
                    <a href="www.google.com/" rel="noopener noreferer" target="_blank">
                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                    </a>  

                    {/* Youtube */}
                    <a href="www.google.com/" rel="noopener noreferer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                    </a>                                  
                </div>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;