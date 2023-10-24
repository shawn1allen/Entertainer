import React from 'react';
import CarouselItem from '../../components/CarouselItem';
import servicesInfo from './servicesInfo.json';

const MarineCar = () => {
    const { marineCar } = servicesInfo; // Get the specific service data

    return (
        <div>
            <CarouselItem serviceData={marineCar} />
        </div>
    );
};

export default MarineCar;
