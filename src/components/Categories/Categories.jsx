import React from 'react';
import MediaCard from '../Cards/Cards.jsx'

export const Categories = ({ location }) => {
    return (
        <div className='cards'>
            <MediaCard location={location} />
        </div>
    )
}