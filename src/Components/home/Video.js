import { useEffect, useRef } from "react";
import $ from 'jquery';

function Video () {
    const vidref=useRef();

    useEffect(() => { 
        var windowHeight = $(window).height();
        $('.slider').height(windowHeight);
        $('.Video').height(windowHeight);
        vidref.current.play();
    
    },[]);

    return ( <>

    <div className='slider '>
    <video className="Video" ref={ vidref }  src={require("../../Assets/background/Darfadar.mp4")} playsInline loop autoPlay  muted />
    </div>

    
    </> );
}

export default Video ;