import React from 'react';
import './css/style.css'


export class Video extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const text = e.target.closest("input");
        if(text!=null){
            this.props.chooseVideo(text.value)
        }

    }

    render() {
        return(
            (
                <React.StrictMode>
                    <h1>{this.props.title}</h1>
                    <form onClick={this.handleClick}>
                        <input type="radio" name="video" value="src1" defaultChecked="checked"/> video1
                        <input type="radio" name="video" value="src2"/> video2
                        <input type="radio" name="video" value="src3"/> video3
                        <input type="radio" name="video" value="src4"/> video4
                    </form>
                </React.StrictMode>
            )
        )
    }


}

