import React from 'react';
import MediaCard from '../Cards/Cards.jsx'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './categories.css'
import { Link } from 'react-router-dom';

export const Categories = ({ location }) => {
    return (
        <div className="cards">
            <MediaCard location={location} />
            <Link to={{
                pathname: "/main/busket",
                state: {
                    name: "Busket"
                }
            }}>
                <ShoppingCartIcon />
            </Link>
        </div>
    )
}