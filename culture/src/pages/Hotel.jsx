import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import HotelListContainer from '../components/TourismContainer';

function Hotel() {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <HotelListContainer/>
            </ErrorBoundary>
        </>
    );
}

export default Hotel;