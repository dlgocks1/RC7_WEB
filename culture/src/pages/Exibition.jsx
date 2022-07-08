import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ExibitionListContainer from '../components/ExibitionListContainer';
import Header from '../components/Header';

function Exibition() {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <ExibitionListContainer/>
            </ErrorBoundary>
        </>
    );
}

export default Exibition;