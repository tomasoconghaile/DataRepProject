import React from 'react';
import axios from 'axios';

 export class CreateTeam extends React.Component{

    constructor(){
        super();

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

    onNewName(e){
        this.setState({
            Name: e.target.value
        })
    }

    onNewFounded(e){
        this.setState({
            Founded: e.target.value
        })
    }
    onNewCrest(e){
        this.setState({
            Crest: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        alert("Team: " +this.state.Name + " Founded " + this.state.Founded + " Crest " + this.state.Crest);

        const newClub = {
            name: this.state.Name,
            founded: this.state.Founded,
            crest: this.state.Crest
        }
        axios.post('http://localhost:4000/api/teams',newClub)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    render(){
        return(
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
