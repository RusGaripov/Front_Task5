import React, { Component } from 'react';
//import Head from "./Head"
import Greeting from "./Greeting"
import Video from "./Video"
import Images from "./Images"


class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Greeting />
                <Video />
                <Images />
            </div>
        );
    }
}

export default Home;