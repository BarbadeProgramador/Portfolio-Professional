

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export  function SplitText() {
    const containerRef = useRef(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return;

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible";

            const { words } = splitText(
                containerRef.current.querySelector("h1")
            );

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.1),
                }
            );
        });
    }, []);

    return (
        <div className="container" ref={containerRef}>
                      <h1 className="h1">Hola Soy Juan Sebastian Rodriguez</h1>
            <Stylesheet />
        </div>
    );
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                width: 100%;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    );
}
