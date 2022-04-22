import React from 'react';
import ReactDOM from 'react-dom/client';

import { Video } from './Video';
import {Play} from "./Play";
import reportWebVitals from './reportWebVitals';


const Videos = {
    src1 : "https://www.youtube.com/embed/O8_tb1pDU8g",
    src2 : "https://www.youtube.com/embed/LxDHz_WqOlo",
    src3 : "https://www.youtube.com/embed/v6bmyFiF8L8",
    src4 : "https://www.youtube.com/embed/-X50xlJiB-8"
}



class Root extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            src : Videos.src1
        }

        this.chooseVideo = this.chooseVideo.bind(this)
    }
    chooseVideo(newVideo){
        this.setState({
            src : Videos[newVideo]
        })
    }

    render() {
        return(
            <React.StrictMode>
                <Video title="List Video" chooseVideo={this.chooseVideo} />
                <Play src={this.state.src}/>
            </React.StrictMode>
        )
    }


}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Root/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
