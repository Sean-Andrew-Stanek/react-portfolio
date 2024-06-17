import { useEffect, useState, React } from 'react';
import PropTypes from 'prop-types';

function TypeWriter({ text, speed = 100, onComplete }) {
    const [displayedText, setDisplayedText] = useState('');

    //Adds letters one at a time
    useEffect(() => {
        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.substr(0, displayedText.length + 1));
            }, speed);

            return () => clearTimeout(timer);
        } else {
            onComplete && onComplete();
        }
    }, [displayedText, text, speed]);

    return <>{displayedText}</>;
}

TypeWriter.propTypes = {
    text: PropTypes.string.isRequired,
    onComplete: PropTypes.func,
    speed: PropTypes.number,
};

export default TypeWriter;
