
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CampingListContainer from '../components/CampingListContainer';
import Header from '../components/Header';

function Camping() {
   
    return (
        <>
            <Header />
            <CampingListContainer/>
        </>
    );
}

export default Camping;