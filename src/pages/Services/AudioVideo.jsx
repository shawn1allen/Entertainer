import React, { useState } from 'react';
import CarouselItem from '../../components/CarouselItem';
import servicesInfo from './servicesInfo.json';

const AudioVideo = () => {
    const { audioVideo } = servicesInfo; // Get the specific service data

    return (
        <div>
            <CarouselItem serviceData={audioVideo} />
        </div>
    );
};

export default AudioVideo;
