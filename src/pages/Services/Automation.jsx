import React, { useState } from 'react';
import CarouselItem from '../../components/CarouselItem';
import servicesInfo from './servicesInfo.json';

const Automation = () => {
    const { automation } = servicesInfo; // Get the specific service data

    return (
        <div>
            <CarouselItem serviceData={automation} />
        </div>
    );
};

export default Automation;
