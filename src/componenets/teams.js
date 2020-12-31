import React from 'react';
import { TeamObject } from './teamObject';

export class Teams extends React.Component{

    render(){
        return this.props.teams.map( (team) => {
            return <TeamObject team={team}></TeamObject>
        })

    }
}