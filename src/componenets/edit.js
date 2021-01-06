import { render } from '@testing-library/react';
import React from 'react';
//import axios
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        // binding the events
        // onSubmit - is the method that gets called when the button on our form is clicked 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFounded = this.onChangeFounded.bind(this);
        this.onChangeCrest = this.onChangeCrest.bind(this);

        this.state = {
            Name: '',
            Founded: '',
            Crest: ''
        }
    }

    //componentDidMount - gets fired when the component becomes active in the view 
    componentDidMount(){
        //pull the parameter out 
        console.log(this.props.match.params.id);

        //read this record from the database 
        //asynchronous calls to the server
        axios.get('http://localhost:4002/api/teams/' + this.props.match.params.id)
        //callback function
        .then(response => {
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Founded:response.data.founded,
                Crest:response.data.crest
            })
        })
        //error
        .catch((error) =>{
            //log the error
            console.log(error);
        });
    }

    // gets called when the value of our input control changes
    // when the value changes it will update this state
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    // onChangeYear method 
    // e is the event coming back when it's invoked 
    // setState - updating our state or object for storing
    onChangeFounded(e){
        this.setState({
            Founded: e.target.value
        });
    }

    // onChangePoster method 
    onChangeCrest(e){
        this.setState({
            Crest: e.target.value
        });
    }

    // Method onSubmit, takes an argument 'e'
    // e.prevenet.Default() will stop us from calling this button multiple of times
    onSubmit(e) {
        e.preventDefault();
        alert("Team: " + this.state.Name + " " + this.state.Founded + " " + this.state.Crest);

        //creating new object 
        const newTeam = {
            //creating lowercase as there is already uppercase
            //server is listening for lowercase that's why it's being used
            //sending them up
            //updating ID
            name: this.state.Name,
            founded: this.state.Founded,
            crest: this.state.Crest,
            _id:this.state._id
        }

        //edit a record
        //method for passing the edited movie
        axios.put('http://localhost:4002/api/teams/' + this.state._id,newTeam)
        //return me a promise
        .then(res =>{
            console.log(res.data)
        })
        .catch();

        //axios - post method 
        //send data to the server
        //axios.post('http://localhost:4000/api/movies',newMovie)
        //return a promise 
        //making post request asynchronously 
        //.then((res)=> {
            //response coming back
            //response to the console
            //console.log(res);
       // })
        //error
        //.catch((err)=>{
         //   console.log(err);
        //});
    }

    // onSubmit - when the button is clicked it gonna invoke a method thisonSubmit
    // first div is for the input control
    // the buttom one is for the submit button
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Team Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Year Founded: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Founded}
                        onChange={this.onChangeFounded}></input>
                    </div>
                    <div className='form-group'>
                        <label>Team Crest: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Crest}
                        onChange={this.onChangeCrest}>
                        </textarea>
                    </div>


                    <div className='form-group'>
                        <input type='submit'
                            value='Save Team'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}