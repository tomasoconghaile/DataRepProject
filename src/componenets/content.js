import React from 'react';

export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello Sports Fans</h1>
      <h2>it is <br></br>{ new Date().toLocaleTimeString()}<br></br>{new Date().toLocaleDateString()}</h2>
            </div>

        );
    }
}