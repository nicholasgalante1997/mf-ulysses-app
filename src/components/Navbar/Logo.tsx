import React from 'react'; 
import { useSprings, animated } from 'react-spring';

const titleArray = ['U', 'l', 'y', 's', 's', 'e', 's']; 

const calculateDelay = (n: number) => {
    if (n === 0) return 200;
    return 200 + (n * 200);
}

const AnimatedLogo = () => {
    const springs = useSprings(
        titleArray.length,
        titleArray.map((letter, index) => ({
            immediate: false,
            delay: calculateDelay(index),
            from: {
                fontSize: "2.5rem",
                color: "black",
                margin: "0px",
                padding: "0px"
            },
            to: {
                fontSize: "3.5rem",
                fontStyle: "italic",
                fontWeight: 200,
                color: "#800000",
                transition: "font-size 0.2ms, color: 0.2ms"
            }
        }))
    )

    return springs.map((s, i) => <animated.h2 style={s}>{titleArray[i]}</animated.h2>);
}

export default AnimatedLogo;