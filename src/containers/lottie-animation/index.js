import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";

export default function LottieAnimation({ className, bodymovinAnimation, reserveStaticIcon }) {
    let animationContainer = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: bodymovinAnimation
        });
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
        bodymovinAnimation ? <div className={className} ref={animationContainer} /> : reserveStaticIcon
    )
}
