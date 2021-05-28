import React from 'react';
import { useSelector } from 'react-redux';
import GoodsCard from '../Cards/Card/Card.jsx';
import '../Cards/card.css'



export const Busket = ({ location: { pathname } }) => {
    const { BuyData } = useSelector(({ BuyData }) => ({ BuyData }));

    const spawnCard = () => {
        const { data } = BuyData
        if (data.length !== 0) {
            return data.map(({ goods: { _id, name, description, images, price } }) => {
                return (
                    <GoodsCard
                        pathname={pathname}
                        key={_id}
                        _id={_id}
                        name={name}
                        description={description}
                        images={images}
                        price={price}
                    />
                )
            })
        }
    }

    return (
        <div className="cards">{spawnCard()}</div>
    )
}