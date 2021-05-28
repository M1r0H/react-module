import React from 'react';
import './mainPage.css'
import { SpawnCategories } from '../Categories/SpawnCategories/SpawnCategories.jsx';

export const MainPage = () => {
    return (
        <div className="cards">
            <h1>Choose categories:</h1>
            <SpawnCategories />
        </div>
    )
}