import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export class Content extends React.Component {


    render() {
        return (
            <div>
                <h1>Hello Sports Fans</h1>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/back5.jpg"></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/back1.png"></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/back4.jpg"></img>
                    </Carousel.Item>
                </Carousel>

            </div>


        );
    }
}