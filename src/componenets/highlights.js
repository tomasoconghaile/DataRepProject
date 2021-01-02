import React from 'react';


export class Highlights extends React.Component {


    render() {
        return (
            <div>
                {/* this is the links for the videos from youtube */}
                <p>This weeks Highlights</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5AUkzPYZnfc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Is4LnHZlvi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cjgvjkGmcbI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WrFzQ-VvvqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </div>

        );
    }
}