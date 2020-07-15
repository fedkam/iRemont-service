import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import PropTypes from 'prop-types'



export default function LottieAnimation({ className, bodymovinAnimation, reserveStaticIcon, setLoop }) {
    let animationContainer = createRef();
    
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: setLoop,
            autoplay: true,
            animationData: bodymovinAnimation
        });
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
        bodymovinAnimation ? <div className={className} ref={animationContainer} /> : reserveStaticIcon
    )
}



LottieAnimation.propTypes = {
    className: PropTypes.string,
    bodymovinAnimation: PropTypes.object,
    reserveStaticIcon: PropTypes.element,
    setLoop: PropTypes.bool
}

LottieAnimation.defaultProps = {
    setLoop: false
}