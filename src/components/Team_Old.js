import React, { Component } from 'react';
import Data from './data';
import TeamMember from './Team_Member';

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }

  mapping(data) {
    return data.map(member => (
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
  }

  render() {
    return <div className='row'>{this.mapping(this.state.data)}</div>;
  }
}
