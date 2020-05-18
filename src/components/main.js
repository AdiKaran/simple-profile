import React from 'react'; 
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';



const Main = () => {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    );
}


export default Main ;