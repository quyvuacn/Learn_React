import React from 'react';
import './css/play.css'



export class Play extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <iframe width="560" height="315" src={this.props.src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

            </iframe>
        )
    }


}