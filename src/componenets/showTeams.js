import React from 'react';
import { Teams } from './teams';
import axios from 'axios';

export class ShowTeams extends React.Component{

    constructor(){
        super();

        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

    state = {
        teams:[ ]
            
    };

    componentDidMount(){
        axios.get('http://localhost:4000/api/teams')
        .then((response) => {
            this.setState({ teams: response.data });
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/teams')
        .then((response) => {
            this.setState({ teams: response.data });
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    

    render(){
        return(
<div className="App">
    <h1>This is the show teams page</h1>
    <Teams teams={this.state.teams} ReloadDataMethod={this.ReloadDataMethod}></Teams>
</div>

        );
    }
}

export default ShowTeams;