import React from 'react';
import axios from 'axios';

 export class CreateTeam extends React.Component{

    constructor(){
        super();
        //submits and saves details for new team
        this.onSubmit = this.onSubmit.bind(this);
        this.onNewName = this.onNewName.bind(this);
        this.onNewFounded = this.onNewFounded.bind(this);
        this.onNewCrest = this.onNewCrest.bind(this);

        this.state ={
            Name:'',
            Founded:'',
            Crest:''
        }
    }
    //stores new team name
    onNewName(e){
        this.setState({
            Name: e.target.value
        })
    }
    //stores new yeam year
    onNewFounded(e){
        this.setState({
            Founded: e.target.value
        })
    }
    //stores the crest for the team
    onNewCrest(e){
        this.setState({
            Crest: e.target.value
        })
    }
    //when the Add Team button is clicked an alert pops up with the details you've entered 
    onSubmit(e){
        e.preventDefault();
        alert("Team: " +this.state.Name + " Founded " + this.state.Founded + " Crest " + this.state.Crest);

        const newClub = {
            name: this.state.Name,
            founded: this.state.Founded,
            crest: this.state.Crest
        }
        //Sends the new team to the server
        axios.post('http://localhost:4002/api/teams',newClub)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    render(){
        return(
            //Here is my input form for the new team to be created with each detail..
<div className='App'>
    <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Add A New Premier League Team</label>
            <input type='text' className='form-control' value={this.setState.Name}
            onChange={this.onNewName}></input>
        </div>
        <div className="form-group">
        <label>Add Year Team Was Founded</label>
            <input type='text' className='form-control' value={this.setState.Founded}
            onChange={this.onNewFounded}></input>
        </div>
        <div className="form-group">
            <label>Team Crest</label>
            <textarea type='text' className='form-control' value={this.state.Crest}
            onChange={this.onNewCrest}></textarea>
        </div>
        <div className="form-group">
            <input type = "submit" value="Add Team" className='btn-btn-primary'></input>
        </div>


    </form>
    
</div>

        );
    }
}

export default CreateTeam;
