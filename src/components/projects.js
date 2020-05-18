import React, { Component } from "react";

import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0} ;

    }
    toggleCategories(){
        if (this.state.activeTab === 0) {
            console.log("active 0")
          return (
              <div className='projects-grid'>

              {/* project 1 */}
              <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://create-react-app.dev/img/logo-og.png)'}}>
                React project #1
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident ullam, quisquam possimus dolorem, illo iusto est dolorum eligendi itaque, impedit nisi explicabo nesciunt sint nam deserunt minima dicta natus.
                </CardText>
                <CardActions border>
                    <Button colored> GitHub </Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
              </Card>

              {/* project 2 */}
              <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://create-react-app.dev/img/logo-og.png)'}}>
                React project #2
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident ullam, quisquam possimus dolorem, illo iusto est dolorum eligendi itaque, impedit nisi explicabo nesciunt sint nam deserunt minima dicta natus.
                </CardText>
                <CardActions border>
                    <Button colored> GitHub </Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
              </Card>

              {/* project 3 */}
              <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://create-react-app.dev/img/logo-og.png)'}}>
                React project #3
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident ullam, quisquam possimus dolorem, illo iusto est dolorum eligendi itaque, impedit nisi explicabo nesciunt sint nam deserunt minima dicta natus.
                </CardText>
                <CardActions border>
                    <Button colored> GitHub </Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
              </Card>

              </div>

          );
        } else if (this.state.activeTab === 1) {
          return (
            <div>
              <h1>This is Angular</h1>
            </div>
          );
        } else if (this.state.activeTab === 2) {
          return (
            <div>
              <h1>This is VueJS</h1>
            </div>
          );
        } else if (this.state.activeTab === 3) {
          return (
            <div>
              <h1>This is MongoDB</h1>
            </div>
          );
        }

    }
    
    render() {
        return (
          <div className="category-tabs">
            <Tabs
              activeTab={this.state.activeTab}
              onChange={(tabID) => this.setState({ activeTab: tabID })}
              ripple
            >
              <Tab>React</Tab>
              <Tab>Angular</Tab>
              <Tab>VueJS</Tab>
              <Tab>MongoDB</Tab>
            </Tabs>

            <Grid>
              <Cell col={12}>
                <div className="projects-cell">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Projects;