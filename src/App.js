import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Material Design light imports
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

// Routing 
import {Link} from 'react-router-dom';

import Main from'./components/main';

function App() {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textdecoration:'none',color:'white'}} to="/">My Portfolio</Link>   } scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer  title="Title">
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
