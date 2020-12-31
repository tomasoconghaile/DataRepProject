import React from 'react';
import Card from 'react-bootstrap/Card';

export class TeamObject extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.team.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.team.Crest} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                {this.props.team.Founded}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>

        );
    }
}