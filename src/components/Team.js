import React, { Component } from 'react';
import Data from './data';
import TeamMember from './Team_Member';

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      displayedData: [],
      counter: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.counter < this.state.data.length) {
      this.state.displayedData.push(this.state.data[this.state.counter]);

      this.setState(function (prvState) {
        return {
          counter: prvState.counter + 1,
        };
      });

      this.displayedData = this.state.displayedData.map(member => (
        <TeamMember
          key={member.id}
          name={member.name}
          image={member.image}
          position={member.position}
          phone={member.phone}
          email={member.email}
          website={member.website}
        />
      ));
    } else {
      document.getElementsByTagName('button')[0].classList.add('disabled');
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='container '>
          <button className='btn btn-primary btn-lg btn-bloc w-100' onClick={this.clickHandler}>
            Click me!
          </button>
        </div>
        {this.displayedData}
      </div>
    );
  }
}
