import React, { useState } from 'react';
import CarouselItem from '../../components/CarouselItem';
import servicesInfo from './servicesInfo.json';

const Surveillance = () => {
    const { surveillance } = servicesInfo; // Get the specific service data

    return (
        <div>
            <CarouselItem serviceData={surveillance} />
        </div>
    );
};

export default Surveillance;
