import React from 'react';
import MediaCard from '../Cards/Cards.jsx'
import './categories.css'
import { ScrollToTop } from './ScrollToTop/ScrollToTop.jsx';
import { ButtonBusket } from './ButtonBusket/ButtonBusket.jsx';

export const Categories = ({ location }) => {
    return (
        <div className="cards">
            <MediaCard location={location} />
            <ButtonBusket />
            <ScrollToTop />
        </div >
    )
}