
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CampingListContainer from '../components/CampingListContainer';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

function Camping() {
   
    return (
        <>
            <Header />
            <ErrorBoundary>
                <CampingListContainer/>
            </ErrorBoundary>
        </>
    );
}

export default Camping;