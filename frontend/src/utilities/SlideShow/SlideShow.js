import React from 'react';

export default function SlideShow() {
    const slides = [
        `${process.env.PUBLIC_URL}/lion.jpg`,
        `${process.env.PUBLIC_URL}/tiger.jpg`,
        `${process.env.PUBLIC_URL}/bear.jpg`,
    ];

    const slideShow = () => {
        // Your slide show logic goes here
    };

    return (
        <div>
            {slides.map((slide, index) => (
                <img key={index} src={slide} alt="slide" style={{ width: '100px', height: '100px' }} />
            ))}
        </div>
    );
}
