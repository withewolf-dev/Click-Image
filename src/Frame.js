import React from 'react'
import Frame from 'react-frame-component';
import Content from './Content'
const Frames = (props) => {
    return (
        <Frame>
        <div>
        {props.picture}    
        </div>
             
        </Frame>
            
    )
}

export default Frames
