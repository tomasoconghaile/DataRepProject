import React from 'react';
import { Teams } from './teams';
import axios from 'axios';

export class ShowTeams extends React.Component{

    state = {
        teams:[ ]
            
    };

    componentDidMount(){
        axios.get('https://jsonblob.com/api/json/link/1d157973-4ab3-11eb-99b0-2f04f7e246b0')
        .then((response) => {
            this.setState({ teams: response.data.Search });
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    render(){
        return(
<div className="App">
    <h1>This is the show teams page</h1>
    <Teams teams={this.state.teams}></Teams>
</div>

        );
    }
}

export default ShowTeams;