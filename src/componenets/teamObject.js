import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export class TeamObject extends React.Component {

    constructor(){
    super();

    this.DeleteTeam = this.DeleteTeam.bind(this);
    }

    DeleteTeam(e){
        e.preventDefault();
        console.log("Deleted: " + this.props.team._id);

        axios.delete("http://localhost:4000/api/teams/" + this.props.team._id)
        .then(()=>{
            this.props.ReloadDataMethod();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.team.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.team.crest} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                {this.props.team.founded}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to ={"/edit/" + this.props.team._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteTeam}>Delete</Button>
                </Card>

            </div>

        );
    }
}
